const http = require('http');

const callbackFn = (res) => {
  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
};

const url = process.argv[2];

http.get(url, callbackFn);
