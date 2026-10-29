const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const drawerIdx = indexHtml.indexOf('id="drawer-container"');
console.log(indexHtml.substring(drawerIdx, drawerIdx + 2000));

