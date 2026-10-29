const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

function findOccurrences(term) {
  console.log('--- Matches for: ' + term + ' ---');
  const lines = mainJs.split('\n');
  lines.forEach((l, idx) => {
    if (l.toLowerCase().includes(term.toLowerCase())) {
      console.log('Line ' + (idx + 1) + ': ' + l.trim().substring(0, 120));
    }
  });
}

findOccurrences('transaction-table-body');
findOccurrences('renderTransactionsReport');
findOccurrences('openTransaction');
findOccurrences('showTransaction');
findOccurrences('openDetail');
findOccurrences('transacciones-view');
findOccurrences('openModal');

