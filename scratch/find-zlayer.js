const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const s = fs.readFileSync('styles.css', 'utf8');
console.log('index.html z-layer:', h.match(/z-layer[^\s"']+/g));
console.log('styles.css z-layer:', s.match(/z-layer[^\s"']+/g));

