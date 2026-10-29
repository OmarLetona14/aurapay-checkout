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
  renderTransactionsReport();

  const tbody = document.getElementById('transaction-table-body');
  if (tbody && tbody.children.length > 0) {
    tbody.children[0].click();
  }

  setTimeout(() => {
    const backdrop = document.getElementById('drawer-backdrop');
    const container = document.getElementById('drawer-container');
    const rect = container.getBoundingClientRect();
    const style = window.getComputedStyle(container);

    const info = {
      backdropClasses: backdrop.className,
      containerClasses: container.className,
      rect: { top: rect.top, left: rect.left, right: rect.right, width: rect.width, height: rect.height },
      visibility: style.visibility,
      display: style.display,
      transform: style.transform,
      zIndex: style.zIndex,
      selectedTx: selectedTransaction ? selectedTransaction.transaction_id : null
    };

    const out = document.createElement('div');
    out.id = 'DRAWER_STATUS';
    out.textContent = JSON.stringify(info);
    document.body.appendChild(out);
  }, 100);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-drawer-status.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-drawer-status.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="DRAWER_STATUS">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Drawer status:', JSON.parse(m[1]));
} else {
  console.log('DRAWER_STATUS not found');
}

