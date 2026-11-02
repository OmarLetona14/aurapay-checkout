const fs = require('fs');
const content = fs.readFileSync('aurapay-checkout.html', 'utf8');
const lines = content.split(/\r?\n/);
lines.forEach((line, i) => {
  if (line.includes('.result-overlay')) console.log(`${i+1}: ${line}`);
});

