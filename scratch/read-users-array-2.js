const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');
const lines = mainJs.split('\n');

console.log(lines.slice(760, 830).join('\n'));

