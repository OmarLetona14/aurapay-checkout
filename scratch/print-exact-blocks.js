const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

console.log('--- 1. refreshTransactionsFromStorage ---');
console.log(mainJs.substring(17107, 18200));

console.log('--- 2. paidTxs.forEach ---');
console.log(mainJs.substring(68113, 69300));

console.log('--- 3. openDrawer ---');
console.log(mainJs.substring(172396, 173500));

console.log('--- 4. closeDrawer ---');
console.log(mainJs.substring(190133, 190600));

