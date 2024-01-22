// const { error } = require('console');
const fs = require('fs');
const path = require('path');

let fn = async () => {
  const pathToFile = path.join(__dirname, 'secret-folder');
  fs.readdir(pathToFile, { withFileTypes: true }, (error, files) => {
    error ? console.log('ты не прав') : files.forEach((file) => {
      if (file.isFile()){
        fs.stat(path.join(pathToFile, file.name), (error, stats) => {
          error ? console.log('это край!') : console.log(`${file.name.split('.').slice(0,1)}-${path.extname(file.name).split('.').slice(1)}-${stats.size}`);
        });
      }
    });
  });
}
fn();


