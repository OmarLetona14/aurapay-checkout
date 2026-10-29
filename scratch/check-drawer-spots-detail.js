const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

console.log('--- Drawer Header Area ---');
console.log(indexHtml.substring(214797 - 50, 214797 + 900));

console.log('--- Timeline Area ---');
console.log(indexHtml.substring(217099 - 50, 217099 + 400));

