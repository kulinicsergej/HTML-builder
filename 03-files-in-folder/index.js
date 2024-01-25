
const fs = require('fs');
const path = require('path');

let fn = async () => {
  const pathToFile = path.join(__dirname, 'secret-folder');
  fs.readdir(pathToFile, { withFileTypes: true }, (error, files) => {
    if (error) {
      console.log('Ошибка чтения директории');
    } else {
      files.forEach((file) => {
        if (file.isFile()){
          fs.stat(path.join(pathToFile, file.name), (error, stats) => {
            if (error) {
              console.log('Ошибка получения информации о файле');
            } else {
              let sizeInKb = stats.size / 1024;
              console.log(`${path.basename(file.name, path.extname(file.name))}-${path.extname(file.name).slice(1)}-${sizeInKb.toFixed(2)}kb`);
            }
          });
        }
      });
    }
  });
}
fn();

