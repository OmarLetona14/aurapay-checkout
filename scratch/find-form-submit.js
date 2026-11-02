const fs = require('fs');

const mainJs = fs.readFileSync('main.js', 'utf8');
const lines = mainJs.split(/\r?\n/);
lines.forEach((l, i) => {
  if (l.includes('create-link-form') || l.includes('generated-link')) {
    console.log(`L${i+1}: ${l.trim()}`);
  }
});
