const fs = require('fs');

const checkout = fs.readFileSync('aurapay-checkout.html', 'utf8');

const regex = /banrural|caja\s*rural|pay\s*rural|rural/gi;
let match;
while ((match = regex.exec(checkout)) !== null) {
  const start = Math.max(0, match.index - 50);
  const end = Math.min(checkout.length, match.index + 50);
  console.log(`Pos ${match.index}: "...${checkout.substring(start, end).replace(/\r?\n/g, ' ')}..."`);
}

