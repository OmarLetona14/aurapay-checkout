const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const checkoutHtml = fs.readFileSync('aurapay-checkout.html', 'utf8');

// Script to go to step 2 and open cash accordion
const step2Script = `
<script>
window.addEventListener('load', () => {
  goToStep(2);
  const cashBtn = document.querySelector('button[aria-controls="agente-bi"]');
  if (cashBtn) cashBtn.click();
});
</script>
`;

let htmlStep2 = checkoutHtml.replace('</body>', step2Script + '</body>');
fs.writeFileSync('scratch/snap-cash-step2.html', htmlStep2, 'utf8');

const shotCashStep2 = path.join(artDir, 'cash-step2-verified.png');
const urlCashStep2 = 'file:///' + path.resolve('scratch/snap-cash-step2.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=440,920',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotCashStep2,
  urlCashStep2
]);
console.log('Cash step 2 screenshot:', fs.existsSync(shotCashStep2));

// Script to show cash final modal
const cashModalScript = `
<script>
window.addEventListener('load', () => {
  document.getElementById('result-cash').classList.add('visible');
});
</script>
`;

let htmlCashModal = checkoutHtml.replace('</body>', cashModalScript + '</body>');
fs.writeFileSync('scratch/snap-cash-modal.html', htmlCashModal, 'utf8');

const shotCashModal = path.join(artDir, 'cash-modal-verified.png');
const urlCashModal = 'file:///' + path.resolve('scratch/snap-cash-modal.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=440,920',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotCashModal,
  urlCashModal
]);
console.log('Cash modal screenshot:', fs.existsSync(shotCashModal));

