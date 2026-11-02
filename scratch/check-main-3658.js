const fs = require('fs');
const content = fs.readFileSync('main.js', 'utf8');
const lines = content.split(/\r?\n/);
for (let i = 3645; i < 3675; i++) {
  if (lines[i]) console.log(`${i+1}: ${lines[i]}`);
}

