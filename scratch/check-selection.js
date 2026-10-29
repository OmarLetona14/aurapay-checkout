const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const mainJs = fs.readFileSync('main.js', 'utf8');

console.log('--- Checkboxes in index.html ---');
const idxLines = indexHtml.split('\n');
idxLines.forEach((l, i) => {
  if (l.includes('type="checkbox"') || l.includes('checkbox')) {
    console.log('index.html:' + (i+1) + ': ' + l.trim());
  }
});

console.log('--- Checkboxes in main.js ---');
const jsLines = mainJs.split('\n');
jsLines.forEach((l, i) => {
  if (l.includes('checkbox') || l.includes('selectedTransactions') || l.includes('toggleSelect')) {
    console.log('main.js:' + (i+1) + ': ' + l.trim());
  }
});

