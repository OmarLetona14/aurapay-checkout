const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const stylesCss = fs.readFileSync('styles.css', 'utf8');

function checkTerm(term) {
  console.log('--- ' + term + ' ---');
  indexHtml.split('\n').forEach((l, i) => {
    if (l.includes(term)) console.log('index.html:' + (i+1) + ': ' + l.trim());
  });
  stylesCss.split('\n').forEach((l, i) => {
    if (l.includes(term)) console.log('styles.css:' + (i+1) + ': ' + l.trim());
  });
}

checkTerm('z-layer-backdrop');
checkTerm('z-layer-drawer');

