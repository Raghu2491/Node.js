var events=require("events");
var eventEmitter=new events.EventEmitter();

var listener1=function listener1(){
    console.log("listener1 Invoked");
}
var listener2=function listener2(){
    console.log("listener1 Invoked");
}

eventEmitter.addListener('listener1',listener1);
eventEmitter.on('listener1',listener1);

eventEmitter.emit('listener1');

console.log(require('events').EventEmitter.listenerCount(eventEmitter,'listener1'));

eventEmitter.removeAllListeners('listener1');

console.log(require('events').EventEmitter.listenerCount(eventEmitter,'listener1'));
