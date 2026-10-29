const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const startIdx = indexHtml.indexOf('id="app-dashboard"');
console.log('app-dashboard starts at index:', startIdx);

// Count tags from startIdx to find where app-dashboard ends
let depth = 0;
const regex = /<\/?div\b[^>]*>/g;
regex.lastIndex = startIdx;

let match;
while ((match = regex.exec(indexHtml)) !== null) {
  if (match[0].startsWith('</div')) {
    depth--;
    if (depth === 0) {
      console.log('app-dashboard ends at index:', match.index);
      const lineNumber = indexHtml.substring(0, match.index).split('\n').length;
      console.log('app-dashboard closing line number:', lineNumber);
      break;
    }
  } else if (!match[0].endsWith('/>')) {
    depth++;
  }
}

