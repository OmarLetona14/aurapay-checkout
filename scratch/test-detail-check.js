const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const testScript = `
<script>
window.addEventListener('load', () => {
  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();
  switchTab('transacciones');

  // Click on the first row in transacciones report table
  const tbody = document.getElementById('transactions-report-table-body');
  const firstRow = tbody.children[0];
  
  // Click on the client cell (child 4)
  firstRow.children[4].click();

  setTimeout(() => {
    const backdrop = document.getElementById('drawer-backdrop');
    const container = document.getElementById('drawer-container');
    const title = document.getElementById('drawer-title');
    const authBox = document.getElementById('detail-bank-auth-section');
    const authNum = document.getElementById('detail-auth-number');
    const auditNum = document.getElementById('detail-audit-number');
    const refNum = document.getElementById('detail-reference-number');
    const payDate = document.getElementById('detail-payment-date');
    const client = document.getElementById('detail-client');
    const amount = document.getElementById('detail-amount');
    const desc = document.getElementById('detail-desc');
    
    const info = {
      drawerOpen: !backdrop.classList.contains('hidden'),
      title: title ? title.innerText : null,
      authSectionVisible: authBox && !authBox.classList.contains('hidden'),
      authNum: authNum ? authNum.innerText : null,
      auditNum: auditNum ? auditNum.innerText : null,
      refNum: refNum ? refNum.innerText : null,
      payDate: payDate ? payDate.innerText : null,
      client: client ? client.innerText : null,
      amount: amount ? amount.innerText : null,
      desc: desc ? desc.innerText : null
    };

    const out = document.createElement('div');
    out.id = 'DRAWER_DETAIL_CHECK';
    out.textContent = JSON.stringify(info);
    document.body.appendChild(out);
  }, 50);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-detail-check.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-detail-check.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="DRAWER_DETAIL_CHECK">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Detail verification result:', JSON.parse(m[1]));
} else {
  console.log('DRAWER_DETAIL_CHECK not found');
}

