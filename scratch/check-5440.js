const fs = require('fs');
const content = fs.readFileSync('aurapay-checkout.html', 'utf8');
const lines = content.split(/\r?\n/);
for (let i = 5440; i < 5465; i++) {
  if (lines[i]) console.log(`${i+1}: ${lines[i]}`);
}

