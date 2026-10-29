const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const indexHtml = fs.readFileSync('index.html', 'utf8');

const testScript = `
<script>
window.addEventListener('load', () => {
  currentUser = users[0];
  document.getElementById('app-login').classList.add('hidden');
  document.getElementById('app-dashboard').classList.remove('hidden');
  loadMerchantBranding();
  renderTable();

  // Test row 1 (chk_5y62bc) which is PAID
  const tbody = document.getElementById('transaction-table-body');
  const paidRow = tbody.children[1];
  paidRow.click();

  setTimeout(() => {
    const backdrop = document.getElementById('drawer-backdrop');
    const container = document.getElementById('drawer-container');
    const title = document.getElementById('drawer-title');
    const authBox = document.getElementById('detail-bank-auth-section');
    const authNum = document.getElementById('detail-auth-number');
    const client = document.getElementById('detail-client');
    const amount = document.getElementById('detail-amount');
    
    const info = {
      drawerOpen: !backdrop.classList.contains('hidden'),
      title: title ? title.innerText : null,
      authSectionVisible: authBox && !authBox.classList.contains('hidden'),
      authNum: authNum ? authNum.innerText : null,
      client: client ? client.innerText : null,
      amount: amount ? amount.innerText : null
    };

    const out = document.createElement('div');
    out.id = 'DASHBOARD_DETAIL_CHECK';
    out.textContent = JSON.stringify(info);
    document.body.appendChild(out);
  }, 50);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-dash-detail.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-dash-detail.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="DASHBOARD_DETAIL_CHECK">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Dashboard detail verification result:', JSON.parse(m[1]));
} else {
  console.log('DASHBOARD_DETAIL_CHECK not found');
}

