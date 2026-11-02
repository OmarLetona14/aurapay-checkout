const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';
const checkoutHtml = fs.readFileSync('aurapay-checkout.html', 'utf8');

const testScript = `
<script>
window.addEventListener('load', () => {
  const overlay = document.getElementById('result-cash');
  overlay.classList.add('show');
  overlay.style.alignItems = 'flex-start';
  overlay.style.paddingTop = '20px';
  overlay.style.paddingBottom = '20px';
  overlay.scrollTop = 0;
});
</script>
`;

let html = checkoutHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/snap-cash-show.html', html, 'utf8');

const shotPath = path.join(artDir, 'cash-overlay-verified.png');
const url = 'file:///' + path.resolve('scratch/snap-cash-show.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=440,920',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotPath,
  url
]);

console.log('Saved cash-overlay-verified.png:', fs.existsSync(shotPath));
