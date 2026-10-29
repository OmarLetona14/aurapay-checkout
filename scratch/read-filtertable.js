const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');
const lines = mainJs.split('\n');

console.log(lines.slice(3105, 3145).join('\n'));

