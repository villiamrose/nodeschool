const mymodule = require('./mymodule');

const callbackFn = (err, files) => {
  if (err) {
    console.log(`error: ${err}`);
  } else {
    files.forEach((file) => console.log(file));
  }
};

const dir = process.argv[2];
const ext = process.argv[3];
mymodule(dir, ext, callbackFn);
