const fs = require('fs');
const content = fs.readFileSync('main.js', 'utf8');
const lines = content.split(/\r?\n/);
lines.forEach((line, i) => {
  if (line.includes("'Efectivo'")) {
    console.log(`L${i+1}: ${line.trim()}`);
  }
});

