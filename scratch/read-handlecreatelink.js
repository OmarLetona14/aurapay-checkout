const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');
const lines = mainJs.split('\n');

console.log(lines.slice(3330, 3420).join('\n'));

