import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { PRERENDER_ROUTES } from '../src/data/siteData.js';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(rootDir, '../dist');
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;

const findBrowser = () => {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.ProgramW6432 && path.join(process.env.ProgramW6432, 'Google/Chrome/Application/chrome.exe'),
    process.env.ProgramFiles && path.join(process.env.ProgramFiles, 'Google/Chrome/Application/chrome.exe'),
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
  ].filter(Boolean);

  return candidates.find((candidate) => existsSync(candidate));
};

const startPreviewServer = () => {
  const viteBin = path.resolve(rootDir, '../node_modules/vite/bin/vite.js');
  const server = spawn(process.execPath, [viteBin, 'preview', '--host', '127.0.0.1', '--port', String(port)], {
    cwd: path.resolve(rootDir, '..'),
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  });

  return server;
};

const waitForServer = async () => {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      await fetch(baseUrl);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw new Error(`Vite preview did not start at ${baseUrl}`);
};

const outputPathForRoute = (route) => {
  if (route === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, route.replace(/^\/+|\/+$/g, ''), 'index.html');
};

const prerender = async () => {
  const server = startPreviewServer();
  let browser;

  try {
    await waitForServer();
    const executablePath = findBrowser();
    browser = await puppeteer.launch({
      headless: true,
      ...(executablePath ? { executablePath } : {}),
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    for (const route of PRERENDER_ROUTES) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });
      await page.waitForSelector('h1');
      const html = await page.content();
      const outputPath = outputPathForRoute(route);
      await mkdir(path.dirname(outputPath), { recursive: true });
      const documentHtml = html.replace(/^<!doctype html>\s*/i, '');
      await writeFile(outputPath, `<!doctype html>\n${documentHtml}`, 'utf8');
    }

    const homepage = await readFile(path.join(distDir, 'index.html'), 'utf8');
    if (!homepage.includes('<h1')) {
      throw new Error('Prerender validation failed: homepage HTML does not contain an H1.');
    }

    console.log(`Prerendered ${PRERENDER_ROUTES.length} routes into dist.`);
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
};

prerender().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
