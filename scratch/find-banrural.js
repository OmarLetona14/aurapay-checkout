const fs = require('fs');

const files = ['index.html', 'main.js', 'aurapay-checkout.html', 'ethospay-checkout.html', 'link-pago_7.html', 'styles.css'];
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (/banrural|caja\s*rural/i.test(line)) {
      console.log(`${file}:${i + 1}: ${line.trim()}`);
    }
  });
}

