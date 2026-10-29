const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const testScript = `
<script>
window.testErrors = [];
window.addEventListener('error', (e) => {
  window.testErrors.push({
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno,
    stack: e.error ? e.error.stack : null
  });
});

window.addEventListener('load', () => {
  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();
  renderTransactionsReport();

  const results = {
    transactionsCount: transactions.length,
    drawerTests: []
  };

  transactions.forEach((tx, idx) => {
    try {
      openDrawer(tx);
      const title = document.getElementById('drawer-title').innerText;
      results.drawerTests.push({ id: tx.transaction_id, success: true, title });
    } catch(err) {
      results.drawerTests.push({ id: tx.transaction_id, success: false, error: err.message, stack: err.stack });
    }
  });

  results.pageErrors = [...window.testErrors];

  const out = document.createElement('div');
  out.id = 'TEST_OUTPUT';
  out.textContent = JSON.stringify(results);
  document.body.appendChild(out);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-all-drawers.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-all-drawers.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="TEST_OUTPUT">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Result:', JSON.parse(m[1]));
} else {
  console.log('Could not find TEST_OUTPUT. Stderr:', res.stderr.toString());
}

