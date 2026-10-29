const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

const lines = mainJs.split('\n');
lines.forEach((l, idx) => {
  if (l.match(/(?:let|const|var)\s+users\s*=/)) {
    console.log('main.js Line ' + (idx + 1) + ': ' + l.trim());
  }
});

const indexHtml = fs.readFileSync('index.html', 'utf8');
const idxLines = indexHtml.split('\n');
idxLines.forEach((l, idx) => {
  if (l.match(/(?:let|const|var)\s+users\s*=/)) {
    console.log('index.html Line ' + (idx + 1) + ': ' + l.trim());
  }
});

