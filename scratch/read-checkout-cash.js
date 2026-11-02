const fs = require('fs');

const content = fs.readFileSync('aurapay-checkout.html', 'utf8');
const lines = content.split(/\r?\n/);

console.log('--- Lines 4900-5110 ---');
for (let i = 4900; i < 5110; i++) {
  if (lines[i]) console.log(`${i + 1}: ${lines[i]}`);
}

