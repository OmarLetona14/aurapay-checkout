const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');
const lines = mainJs.split('\n');

console.log(lines.slice(720, 760).join('\n'));

