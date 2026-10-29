const fs = require('fs');
const stylesCss = fs.readFileSync('styles.css', 'utf8');

console.log(stylesCss.substring(0, 1500));

