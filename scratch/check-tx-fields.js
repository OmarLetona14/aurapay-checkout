const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

const vm = require('vm');
const sandbox = {};
const txMatch = mainJs.match(/let transactions = (\[[\s\S]*?\n\s*\];)/);
if (txMatch) {
  const code = 'var transactions = ' + txMatch[1];
  vm.runInNewContext(code, sandbox);
  console.log('Total mock transactions:', sandbox.transactions.length);
  sandbox.transactions.forEach((tx, i) => {
    const issues = [];
    if (!tx.transaction_id) issues.push('missing transaction_id');
    if (!tx.merchant) issues.push('missing merchant');
    else if (!tx.merchant.name) issues.push('missing merchant.name');
    if (!tx.product) issues.push('missing product');
    else if (!tx.product.title) issues.push('missing product.title');
    if (!tx.client) issues.push('missing client');
    if (tx.amount === undefined) issues.push('missing amount');
    if (issues.length > 0) {
      console.log('Tx #' + i + ' (' + (tx.transaction_id || 'no-id') + '): ' + issues.join(', '));
    }
  });
  console.log('Done scanning mock transactions.');
} else {
  console.log('Could not match transactions array');
}
