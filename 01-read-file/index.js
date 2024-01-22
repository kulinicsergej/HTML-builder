const path = require("path");
const fs = require('fs');
const pathToFile = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(pathToFile,'utf-8');
readStream.on('data', function(chunk) {
console.log(chunk);
}) 


