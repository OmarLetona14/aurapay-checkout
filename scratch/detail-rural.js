const fs = require('fs');

function inspectMatches(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  console.log(`=== FILE: ${file} ===`);
  lines.forEach((line, i) => {
    if (/rural|banrural/i.test(line)) {
      console.log(`L${i+1}: ${line.trim()}`);
    }
  });
}

inspectMatches('main.js');
inspectMatches('index.html');
inspectMatches('aurapay-checkout.html');
inspectMatches('ethospay-checkout.html');
inspectMatches('link-pago_7.html');

