const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

function findSubstr(str) {
  const idx = mainJs.indexOf(str);
  console.log('Match for "' + str + '": ' + idx);
  if (idx !== -1) {
    console.log(mainJs.substring(idx - 20, idx + str.length + 50));
  }
}

findSubstr('function refreshTransactionsFromStorage()');
findSubstr('paidTxs.forEach(t =>');
findSubstr('function openDrawer(transaction)');
findSubstr('function closeDrawer()');

