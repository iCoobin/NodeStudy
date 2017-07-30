
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('some_event' ,function(){
  console.log('some_event 事件触发');
});

setTimeout(function(){
  event.emit('some_event');
}, 1000);

var emitter = new EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener3', arg1, arg2);
});

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');