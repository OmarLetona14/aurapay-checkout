const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');
const lines = mainJs.split('\n');

console.log('--- Lines 1340 - 1460 ---');
console.log(lines.slice(1340, 1460).join('\n'));

console.log('--- Lines 1460 - 1580 ---');
console.log(lines.slice(1460, 1580).join('\n'));

