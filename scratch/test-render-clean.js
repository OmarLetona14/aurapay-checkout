const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artDir = 'C:\\Users\\Omar Letona\\.gemini\\antigravity\\brain\\dd5af267-0200-4dee-964c-123a46ef81e6';

// 1. Screenshot of index.html
const shotIndexPath = path.join(artDir, 'index-verified.png');
const urlIndex = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1400,900',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotIndexPath,
  urlIndex
]);
console.log('index.html screenshot:', fs.existsSync(shotIndexPath));

// 2. Screenshot of aurapay-checkout.html
const shotCheckoutPath = path.join(artDir, 'checkout-verified.png');
const urlCheckout = 'file:///' + path.resolve('aurapay-checkout.html').replace(/\\/g, '/');

spawnSync(chromePath, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=420,880',
  '--virtual-time-budget=2000',
  '--screenshot=' + shotCheckoutPath,
  urlCheckout
]);
console.log('checkout screenshot:', fs.existsSync(shotCheckoutPath));

