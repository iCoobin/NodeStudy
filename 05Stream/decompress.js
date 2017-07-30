//解压

var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('./05Stream/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('./05Stream/input.txt'));

console.log("文件解压完成。");
