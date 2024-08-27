const events=require('events')
let emmitterEvent=new events.EventEmitter();

//define event
emmitterEvent.on('hai',(a,b)=>{
    let result=a+b;
    console.log(`hai event triged ${a} +${b} = ${result}`);
    
})
emmitterEvent.emit('hai',10,20)