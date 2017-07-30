var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Hello World! hhh');
});

server.listen(4000);

server.on('error',function(error){
  console.log(error);
})

server.on('listening',function(){
  console.log(haha);
})
