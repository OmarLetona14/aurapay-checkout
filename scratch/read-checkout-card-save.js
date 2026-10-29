const fs = require('fs');
const auraHtml = fs.readFileSync('aurapay-checkout.html', 'utf8');
const lines = auraHtml.split('\n');

console.log(lines.slice(7670, 7720).join('\n'));

