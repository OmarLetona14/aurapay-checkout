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
    const qrSec = document.getElementById('drawer-qr-section');
    const qrImg = document.getElementById('drawer-qr-img');
    const qrAmount = document.getElementById('drawer-qr-amount');
    const qrId = document.getElementById('drawer-qr-id');
    const headerQrBtn = document.getElementById('drawer-header-qr-btn');
    const copyImgBtn = document.getElementById('btn-drawer-copy-qr-img');
    const waBtn = document.getElementById('btn-drawer-wa-qr');
    const copyLinkBtn = document.getElementById('btn-drawer-copy-qr-url');
    const dlBtn = document.getElementById('btn-drawer-download-qr');
    const expandBtn = document.getElementById('btn-drawer-expand-qr');
    
    const info = {
      drawerOpen: !backdrop.classList.contains('hidden'),
      containerClasses: container.className,
      title: title ? title.innerText : null,
      qrSectionExists: !!qrSec,
      qrImgSrc: qrImg ? qrImg.src : null,
      qrAmount: qrAmount ? qrAmount.innerText : null,
      qrId: qrId ? qrId.innerText : null,
      headerQrBtnExists: !!headerQrBtn,
      buttons: {
        copyImg: !!copyImgBtn,
        wa: !!waBtn,
        copyLink: !!copyLinkBtn,
        dl: !!dlBtn,
        expand: !!expandBtn
      }
    };

    const out = document.createElement('div');
    out.id = 'QR_DRAWER_CHECK';
    out.textContent = JSON.stringify(info);
    document.body.appendChild(out);
  }, 100);
});
</script>
`;

let testHtml = indexHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/test-qr-check.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--virtual-time-budget=2000',
  '--dump-dom',
  'file:///' + path.resolve('scratch/test-qr-check.html').replace(/\\/g, '/')
]);

const domOut = res.stdout.toString();
const m = domOut.match(/<div id="QR_DRAWER_CHECK">([\s\S]*?)<\/div>/);
if (m) {
  console.log('QR Drawer verification result:', JSON.stringify(JSON.parse(m[1]), null, 2));
} else {
  console.log('QR_DRAWER_CHECK not found');
}

