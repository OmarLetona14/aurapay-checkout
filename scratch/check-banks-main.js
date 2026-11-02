const fs = require('fs');

const mainJs = fs.readFileSync('main.js', 'utf8');

const bankWords = ['banrural', 'caja rural', 'cajarural', 'rural'];
for (const word of bankWords) {
  const matches = (mainJs.match(new RegExp(word, 'gi')) || []).length;
  console.log(`main.js count of "${word}":`, matches);
}

