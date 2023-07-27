const http = require('http');
const fs = require('fs');

const listener = (req, res) => {
  const file = process.argv[3];
  const fileStream = fs.createReadStream(file);

  fileStream.pipe(res);
};

const port = process.argv[2];
const server = http.createServer(listener);

server.listen(port);
