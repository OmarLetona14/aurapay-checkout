const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');
const lines = mainJs.split('\n');

console.log('--- Lines 6020-6050 (End of main.js) ---');
console.log(lines.slice(6020, 6050).join('\n'));

console.log('--- Lines 1000-1030 ---');
console.log(lines.slice(1000, 1030).join('\n'));

console.log('--- Lines 1115-1135 ---');
console.log(lines.slice(1115, 1135).join('\n'));

