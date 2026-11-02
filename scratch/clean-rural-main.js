const fs = require('fs');
let mainJs = fs.readFileSync('main.js', 'utf8');

mainJs = mainJs.replace(/modality\.includes\('Rural'\)\s*\|\|\s*\r?\n\s*/g, '');

fs.writeFileSync('main.js', mainJs, 'utf8');
console.log('Cleaned modality.includes(Rural)');

