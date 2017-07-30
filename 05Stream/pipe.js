//管道流
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('./05Stream/input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('./05Stream/output2.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

readerStream.on('end', function(){
  console.log('管道读取完成！');
});

writerStream.on('finish', function(){
  console.log('管道写入完成！');
});

console.log("程序执行完毕");
