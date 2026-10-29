const fs = require('fs');

const mainJs = fs.readFileSync('main.js', 'utf8');

// Check renderTransactionsReport in mainJs
console.log('Finding renderTransactionsReport in main.js...');
const rtrStart = mainJs.indexOf('function renderTransactionsReport()');
console.log('Found at index:', rtrStart);
if (rtrStart !== -1) {
  console.log(mainJs.substring(rtrStart, rtrStart + 1200));
}

