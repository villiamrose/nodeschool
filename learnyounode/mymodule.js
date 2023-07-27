const fs = require('fs');

const extFilter = (file, filter) => {
  const fileExt = file.split('.')[1];
  return fileExt === filter;
};

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles = files.filter((file) => extFilter(file, ext));
    return callback(null, filteredFiles);
  });
};
