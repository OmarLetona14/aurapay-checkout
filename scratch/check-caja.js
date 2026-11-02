const fs = require('fs');

function inspectCaja(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  console.log(`=== FILE: ${file} ===`);
  lines.forEach((line, i) => {
    if (/\bcaja\b/i.test(line)) {
      console.log(`L${i+1}: ${line.trim()}`);
    }
  });
}

inspectCaja('main.js');
inspectCaja('index.html');
inspectCaja('aurapay-checkout.html');

