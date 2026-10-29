const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const testScript = `
<script>
window.addEventListener('load', () => {
  const container = document.getElementById('drawer-container');
  const backdrop = document.getElementById('drawer-backdrop');
  const rect = container.getBoundingClientRect();
  const cStyle = window.getComputedStyle(container);
  const bStyle = window.getComputedStyle(backdrop);

  const data = {
    containerRect: { top: rect.top, left: rect.left, right: rect.right, width: rect.width, height: rect.height },
    containerDisplay: cStyle.display,
    containerVisibility: cStyle.visibility,
    containerTransform: cStyle.transform,
    containerZIndex: cStyle.zIndex,
    backdropDisplay: bStyle.display,
    backdropOpacity: bStyle.opacity,
    backdropZIndex: bStyle.zIndex
  };

  const out = document.createElement('div');
  out.id = 'CONTAINER_DUMP';
  out.textContent = JSON.stringify(data);
  document.body.appendChild(out);
});
</script>
`;

let testHtml = fs.readFileSync('scratch/snap-trans-drawer-sync.html', 'utf8');
testHtml = testHtml.replace('</body>', testScript + '</body>');
fs.writeFileSync('scratch/snap-trans-drawer-sync2.html', testHtml, 'utf8');

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--dump-dom',
  'file:///' + path.resolve('scratch/snap-trans-drawer-sync2.html').replace(/\\/g, '/')
]);

const out = res.stdout.toString();
const m = out.match(/<div id="CONTAINER_DUMP">([\s\S]*?)<\/div>/);
if (m) {
  console.log('Container dump:', JSON.parse(m[1]));
}

