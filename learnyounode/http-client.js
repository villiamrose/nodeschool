const http = require('http');

const callbackFn = (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => console.log(data));
};

const url = process.argv[2];

http.get(url, callbackFn);
