import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = 'src';
const DOMAIN = 'https://iqoracleaningservices.com';

async function walk(dir, callback) {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    const stat = await fs.stat(p);
    if (stat.isDirectory()) {
      await walk(p, callback);
    } else {
      await callback(p);
    }
  }
}

async function fix() {
  await walk(SRC_DIR, async (p) => {
    if (p.endsWith('.jsx')) {
      let content = await fs.readFile(p, 'utf-8');
      if (content.includes(DOMAIN)) {
        if (!content.includes('import { BASE_URL }')) {
          const dir = path.dirname(p);
          let relativePath = path.relative(dir, 'src/config.js');
          if (!relativePath.startsWith('.')) {
            relativePath = './' + relativePath;
          }
          relativePath = relativePath.replace(/\\/g, '/');
          relativePath = relativePath.replace(/\.js$/, '');
          
          const importStatement = `import { BASE_URL } from '${relativePath}';\n`;
          const lastImportIndex = content.lastIndexOf('import ');
          if (lastImportIndex !== -1) {
            const endOfLastImport = content.indexOf('\n', lastImportIndex);
            content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
          } else {
            content = importStatement + content;
          }
        }
        
        content = content.replace(/href="https:\/\/iqoracleaningservices\.com([^"]*)"/g, 'href={`${BASE_URL}$1`}');
        content = content.replace(/href=\{'https:\/\/iqoracleaningservices\.com([^']*)'\}/g, 'href={`${BASE_URL}$1`}');
        content = content.replace(/href={`https:\/\/iqoracleaningservices\.com([^`]*)\`}/g, 'href={`${BASE_URL}$1`}');
        
        content = content.replace(/'https:\/\/iqoracleaningservices\.com([^']*)'/g, '`${BASE_URL}$1`');
        content = content.replace(/"https:\/\/iqoracleaningservices\.com([^"]*)"/g, '`${BASE_URL}$1`');
        content = content.replace(/`https:\/\/iqoracleaningservices\.com([^`]*)`/g, '`${BASE_URL}$1`');

        await fs.writeFile(p, content, 'utf-8');
        console.log(`Updated ${p}`);
      }
    }
  });
}

fix().catch(console.error);
