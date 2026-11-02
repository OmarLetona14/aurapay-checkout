const fs = require('fs');
const content = fs.readFileSync('aurapay-checkout.html', 'utf8');
const lines = content.split(/\r?\n/);
for (let i = 4450; i < 4475; i++) {
  if (lines[i]) console.log(`${i+1}: ${lines[i]}`);
}

