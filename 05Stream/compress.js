//链式流

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('./05Stream/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./05Stream/input.txt.gz'));

console.log("文件压缩完成。");
