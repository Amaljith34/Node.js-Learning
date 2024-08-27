const EventEmitter = require("events");
const emitter=new EventEmitter();

emitter.on("message",(data)=>{
    console.log(data.text);   
})
emitter.emit("message",{text:"user logged"})