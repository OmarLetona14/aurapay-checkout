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
  // 1. Simulate login
  try {
    currentUser = users[0];
    document.getElementById('app-login').classList.add('hidden');
    document.getElementById('app-dashboard').classList.remove('hidden');
    loadMerchantBranding();
    renderTable();
    renderTransactionsReport();
  } catch(e) {
    window.testErrors.push({ stage: 'login', error: e.message, stack: e.stack });
  }

  const results = {
    errors: [...window.testErrors],
    tableRowsCount: 0,
    reportRowsCount: 0,
    drawerBeforeClick: null,
    clickDashboardRowError: null,
    drawerAfterDashboardClick: null,
    clickReportRowError: null,
    drawerAfterReportClick: null,
    reportRowClickable: false
  };

  try {
    const tbody = document.getElementById('transaction-table-body');
    results.tableRowsCount = tbody ? tbody.children.length : 0;
    
    const reportTbody = document.getElementById('transactions-report-table-body');
    results.reportRowsCount = reportTbody ? reportTbody.children.length : 0;

    // Check report table row onclick
    if (reportTbody && reportTbody.children.length > 0) {
      const repFirstRow = reportTbody.children[0];
      results.reportRowClickable = typeof repFirstRow.onclick === 'function';
    }

    // Test clicking row in dashboard table
    if (tbody && tbody.children.length > 0) {
      const firstRow = tbody.children[0];
      firstRow.click();
      
      const backdrop = document.getElementById('drawer-backdrop');
      const title = document.getElementById('drawer-title');
      results.drawerAfterDashboardClick = {
        hasHidden: backdrop.classList.contains('hidden'),
        title: title ? title.innerText : null
      };
    }
  } catch(err) {
    results.clickDashboardRowError = err.message + '\\n' + err.stack;
  }

  results.errorsAfterAll = [...window.testErrors];

  const out = document.createElement('div');
  out.id = 'TEST_OUTPUT';
  out.textContent = JSON.stringify(results);
  document.body.appendChild(out);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-drawer-action.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-drawer-action.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="TEST_OUTPUT">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Result:', JSON.parse(m[1]));
} else {
  console.log('Could not find TEST_OUTPUT.');
}

