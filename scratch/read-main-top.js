const fs = require('fs');
const mainJs = fs.readFileSync('main.js', 'utf8');

console.log(mainJs.substring(0, 2000));

