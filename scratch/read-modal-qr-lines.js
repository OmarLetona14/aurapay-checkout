const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const lines = indexHtml.split('\n');

console.log(lines.slice(2410, 2480).join('\n'));

