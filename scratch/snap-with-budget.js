const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';

// Snap 1: Drawer open with QR section
const screenshotDrawerPath = path.join(artDir, 'drawer-individual-qr.png');
const urlDrawer = 'file:///' + path.resolve('scratch/test-qr-check.html').replace(/\\/g, '/');

const res1 = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1400,900',
  '--virtual-time-budget=3000',
  '--screenshot=' + screenshotDrawerPath,
  urlDrawer
]);
console.log('Drawer screenshot with budget:', fs.existsSync(screenshotDrawerPath), fs.statSync(screenshotDrawerPath).size);

// Snap 2: Modal QR
const screenshotModalPath = path.join(artDir, 'modal-individual-qr.png');
const urlModal = 'file:///' + path.resolve('scratch/snap-qr-modal.html').replace(/\\/g, '/');

const res2 = spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1400,900',
  '--virtual-time-budget=3000',
  '--screenshot=' + screenshotModalPath,
  urlModal
]);
console.log('Modal screenshot with budget:', fs.existsSync(screenshotModalPath), fs.statSync(screenshotModalPath).size);

