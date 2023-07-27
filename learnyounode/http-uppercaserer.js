const http = require('http');
const map = require('through2-map');

const listener = (req, res) => {
  if (req.method === 'POST') {
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
  }
};

const port = process.argv[2];
const server = http.createServer(listener);

server.listen(port);
