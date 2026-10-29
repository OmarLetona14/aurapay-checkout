const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

const lines = mainJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('currentDrawerTab') || l.includes('switchDrawerTab') || l.includes('tab-technical') || l.includes('tab-client')) {
    console.log('main.js Line ' + (i+1) + ': ' + l.trim());
  }
});

const indexHtml = fs.readFileSync('index.html', 'utf8');
const idxLines = indexHtml.split('\n');
idxLines.forEach((l, i) => {
  if (l.includes('switchDrawerTab') || l.includes('tab-technical') || l.includes('tab-client')) {
    console.log('index.html Line ' + (i+1) + ': ' + l.trim());
  }
});

