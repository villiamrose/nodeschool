const fs = require('fs');

const extensionFilter = (file, filter) => {
  const fileExt = file.split('.')[1];
  return fileExt === filter;
};

const dir = process.argv[2];

fs.readdir(dir, (err, files) => {
  if (err) {
    throw err;
  } else {
    const ext = process.argv[3];
    const filteredFiles = files.filter((file) => extensionFilter(file, ext));
    filteredFiles.forEach((file) => {
      console.log(file);
    });
  }
});
