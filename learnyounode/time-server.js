const net = require('net');

const padStart = (val, n) => String(val).padStart(n, '0');

const getDateTime = () => {
  const now = new Date();

  const YYYY = padStart(now.getFullYear(), 4);
  const MM = padStart(now.getMonth() + 1, 2);
  const DD = padStart(now.getDate(), 2);
  const hh = padStart(now.getHours(), 2);
  const mm = padStart(now.getMinutes(), 2);

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}`;
};

const listener = (socket) => {
  const dt = getDateTime();
  socket.end(`${dt}\n`);
};

const port = process.argv[2];
const server = net.createServer(listener);

server.listen(port);
