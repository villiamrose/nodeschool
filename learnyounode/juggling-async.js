const http = require('http');

const allData = [];

const printData = (wait) => {
  if (allData.length === wait && !allData.includes(undefined)) {
    allData.forEach((data) => {
      console.log(data);
    });
  }
};

const callbackFn = (res, index, wait) => {
  let data = '';

  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    if (index !== null) {
      allData[index] = data;
    } else {
      allData.push(data);
    }
    printData(wait);
  });
};

const urls = [
  process.argv[2],
  process.argv[3],
  process.argv[4],
];

for (let i = 0; i < urls.length; i += 1) {
  http.get(urls[i], (res) => callbackFn(res, i, urls.length));
}
