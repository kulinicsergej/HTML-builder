const path = require("path");
const fs = require('fs');
const readline = require('readline');
const pathToFile = path.join(__dirname, '02-write-file.txt');
const fileStream = fs.createWriteStream(pathToFile, { flags: 'a' });
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Введите текст:');
rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Прощайте!');
    rl.close();
  } else {
    fileStream.write(input + '\n');
    console.log('Текст добавлен. Введите еще или введите "exit" для выхода.');
  }
});
rl.on('close', () => {
  fileStream.end();
  process.exit(0);
});