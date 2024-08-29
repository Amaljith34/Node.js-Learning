// const eventEmitter=require('events')
const { EventEmitter } = require('stream')
const eventEmitters=new EventEmitter();
eventEmitters.on('message',(text)=>{
    console.log(`message recived : ${text}`);

})
eventEmitters.once('message',(text)=>{
    console.log(`message recived : ${text}`);

})
eventEmitters.emit('message','good mornning');