import fs from 'fs/promises';
import path from 'path';

const SRC_DIR = 'src';

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
      let changed = false;

      // 1. In ServiceShowcase.jsx, let's fix the links array manually
      if (p.includes('ServiceShowcase.jsx')) {
        const oldContent = content;
        content = content.replace(/\/carpet-cleaning-services-in-north-hollywood\//g, '/carpet-cleaning-services-in-north-hollywood');
        content = content.replace(/\/upholstery-cleaning-services-in-north-hollywood\//g, '/upholstery-cleaning-services-in-north-hollywood');
        content = content.replace(/\/tile-and-grout-cleaning-services-in-north-hollywood\//g, '/tile-and-grout-cleaning-services-in-north-hollywood');
        
        // Add onClick
        content = content.replace(/<a href=\{service\.link\} className="(.*?)"(.*?)>/, 
          `<a href={service.link} onClick={(e) => { e.preventDefault(); onNavigate?.(service.link.replace(BASE_URL, '')); }} className="$1"$2>`);
        if (content !== oldContent) changed = true;
      }

      if (changed) {
        await fs.writeFile(p, content, 'utf-8');
        console.log(`Updated ${p}`);
      }
    }
  });
}

fix().catch(console.error);
