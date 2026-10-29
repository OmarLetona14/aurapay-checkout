const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const mainJs = fs.readFileSync('main.js', 'utf8');

console.log('--- QR in index.html ---');
indexHtml.split('\n').forEach((l, i) => {
  if (l.toLowerCase().includes('qr')) {
    console.log('index.html:' + (i+1) + ': ' + l.trim());
  }
});

console.log('--- QR in main.js ---');
mainJs.split('\n').forEach((l, i) => {
  if (l.toLowerCase().includes('qr')) {
    console.log('main.js:' + (i+1) + ': ' + l.trim());
  }
});

