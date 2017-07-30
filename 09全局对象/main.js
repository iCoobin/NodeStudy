// 输出全局变量 __filename 的值
console.log( __filename );

// 输出全局变量 __dirname 的值
console.log( __dirname );

function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);

function printHello2(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello2, 2000);

// 清除定时器
clearTimeout(t);

//循环执行
function printHello3(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
// setInterval(printHello3, 2000);

console.trace();

process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);

  console.log('退出码为:', code);
});
console.log("程序执行结束");
