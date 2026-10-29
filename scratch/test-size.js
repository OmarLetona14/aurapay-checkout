const { spawnSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const path = require('path');
const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1280,900',
  '--dump-dom',
  'file:///' + path.resolve('scratch/snap-trans-drawer-sync2.html').replace(/\\/g, '/')
]);
const m = res.stdout.toString().match(/<div id="CONTAINER_DUMP">([\s\S]*?)<\/div>/);
if (m) console.log(JSON.parse(m[1]));

