const fs = require('fs');

if (fs.existsSync('link-pago_7.html')) {
  const content = fs.readFileSync('link-pago_7.html', 'utf8');
  const regex = /banrural|caja\s*rural|pay\s*rural|rural/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const start = Math.max(0, match.index - 50);
    const end = Math.min(content.length, match.index + 50);
    console.log(`Pos ${match.index}: "...${content.substring(start, end).replace(/\r?\n/g, ' ')}..."`);
  }
}
console.log('Finished checking link-pago_7.html');

