const fs = require('fs');

const files = fs.readdirSync('.').filter(f => fs.statSync(f).isFile() && (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.css')));

console.log('Searching files:', files);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (/\brural\b|banrural/i.test(line)) {
      console.log(`[RURAL/BANRURAL] ${file}:${i + 1}: ${line.trim()}`);
    }
  });
}

