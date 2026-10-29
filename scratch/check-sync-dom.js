const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const res = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--dump-dom',
  'file:///' + path.resolve('scratch/snap-trans-drawer-sync.html').replace(/\\/g, '/')
]);

const out = res.stdout.toString();
console.log('Contains drawer-container translate-x-0:', out.includes('translate-x-0'));
console.log('app-dashboard hidden:', out.includes('id="app-dashboard" class="hidden'));

