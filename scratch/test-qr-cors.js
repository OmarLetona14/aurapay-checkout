const https = require('https');

https.get('https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=test', (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Access-Control-Allow-Origin:', res.headers['access-control-allow-origin']);
  console.log('Content-Type:', res.headers['content-type']);
}).on('error', (e) => {
  console.error('Request error:', e.message);
});

