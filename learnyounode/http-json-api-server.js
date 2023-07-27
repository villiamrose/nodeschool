const http = require('http');

require('url');

const parseTime = (time) => {
  const dateTime = new Date(time);
  return {
    hour: dateTime.getHours(),
    minute: dateTime.getMinutes(),
    second: dateTime.getSeconds(),
  };
};

const toUnixTime = (time) => {
  const dateTime = new Date(time);
  return {
    unixtime: dateTime.getTime(),
  };
};

const getTime = (reqUrl) => {
  const params = reqUrl.searchParams;
  const time = params.get('iso');
  return time;
};

const router = (req, res) => {
  if (req.method === 'GET') {
    const reqUrl = new URL(req.url, 'http://localhost');

    if (reqUrl.pathname === '/api/parsetime') {
      const time = getTime(reqUrl);
      const parsedTime = parseTime(time);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(parsedTime));
    } else if (reqUrl.pathname === '/api/unixtime') {
      const time = getTime(reqUrl);
      const unixTime = toUnixTime(time);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(unixTime));
    }
  }
};

const port = process.argv[2];
const server = http.createServer(router);

server.listen(port);
