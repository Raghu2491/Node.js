var event=require('events');
var eventEmitter=new event.EventEmitter();

var dataSender=function connected(){
    console.log("sending data...");

    eventEmitter.on('receiveDaata',dataReceiver);
    eventEmitter.emit('receiveDaata');
}
eventEmitter.on('sendData',dataSender);

eventEmitter.emit('sendData');

function dataReceiver() {
    console.log("Data received");
}
console.log("Program Ended");
