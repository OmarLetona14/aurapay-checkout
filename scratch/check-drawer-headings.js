const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const drawerIdx = indexHtml.indexOf('id="drawer-container"');
const drawerEnd = indexHtml.indexOf('<!-- ================= NOTIFICATION TOAST ================= -->');
const drawerMarkup = indexHtml.substring(drawerIdx, drawerEnd);

const lines = drawerMarkup.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<h4') || l.includes('id="detail-') || l.includes('id="drawer-')) {
    console.log(`Line ${i+1}: ${l.trim().substring(0, 100)}`);
  }
});

