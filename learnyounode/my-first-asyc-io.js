const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    const lines = data.split('\n');
    const count = lines.length - 1;
    console.log(count);
  }
});
