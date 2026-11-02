const fs = require('fs');
if (fs.existsSync('logo pay rural.html')) {
  console.log('logo pay rural.html contents:');
  console.log(fs.readFileSync('logo pay rural.html', 'utf8'));
} else {
  console.log('logo pay rural.html does not exist');
}

