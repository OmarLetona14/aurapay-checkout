const fs = require('fs');

const files = fs.readdirSync('.').filter(f => fs.statSync(f).isFile() && (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css') || f.endsWith('.json')));

let foundAny = false;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (/banrural|caja\s*rural|cajarural|rural|ban\s*rural/i.test(line)) {
      console.log(`[MATCH] ${file}:${i + 1}: ${line.trim()}`);
      foundAny = true;
    }
  });
}

if (!foundAny) {
  console.log('✅ ZERO MATCHES FOUND! All references to Banrural, Caja Rural and Rural have been completely removed.');
}

