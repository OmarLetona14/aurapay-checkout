const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const lines = indexHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<tbody') || l.includes('id=\"') && l.includes('table')) {
    console.log('Line ' + (i+1) + ': ' + l.trim());
  }
});

