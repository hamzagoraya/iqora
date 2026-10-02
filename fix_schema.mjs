import fs from 'fs/promises';
import path from 'path';

async function fixSchema() {
  const jsonPath = path.join('src', 'data', 'homeSchema.json');
  const jsPath = path.join('src', 'data', 'homeSchema.js');
  
  let content = await fs.readFile(jsonPath, 'utf-8');
  
  // Create JS content
  let jsContent = `import { BASE_URL } from '../config';\n\nconst homeSchema = ${content};\n\nexport default homeSchema;\n`;
  
  // replace "https://iqoracleaningservices.com/" with `${BASE_URL}/`
  // We need to replace the values in the JSON string but we want it to be a valid JS object with template literals.
  
  // Since it's stringified JSON, we can parse it, but that doesn't help with template literals.
  // Instead of parsed JSON, we can do a regex replace on the jsContent:
  // "https://iqoracleaningservices.com/..." -> \`${BASE_URL}/...\`
  jsContent = jsContent.replace(/"https:\/\/iqoracleaningservices\.com([^"]*)"/g, '`${BASE_URL}$1`');
  
  await fs.writeFile(jsPath, jsContent, 'utf-8');
  console.log(`Created ${jsPath}`);
  
  // Update HomePage.jsx
  const homePagePath = path.join('src', 'pages', 'HomePage.jsx');
  let homePageContent = await fs.readFile(homePagePath, 'utf-8');
  homePageContent = homePageContent.replace(/import homeSchema from '\.\.\/data\/homeSchema\.json';/g, "import homeSchema from '../data/homeSchema';");
  await fs.writeFile(homePagePath, homePageContent, 'utf-8');
  console.log('Updated HomePage.jsx');
  
  // delete json
  await fs.unlink(jsonPath);
  console.log('Deleted homeSchema.json');
}

fixSchema().catch(console.error);
