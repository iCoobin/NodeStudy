var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('./11文件系统/input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");
});

var fs = require('fs');

fs.stat('./11文件系统/input.txt', function (err, stats) {
    console.log(stats.isFile()); 		//true
})
