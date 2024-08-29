const {      Duplex}=require('stream');
const duplex=new Duplex({
    write(chunk,encoding,callback){
        console.log(chunk.toString());
        
        
    },
    read(size){
        this.push(`hello from read side and size is ${size}`);
        this.push(null);
    }
    
})
duplex.on('data',(chunk)=>{
    console.log(chunk.toString());
    
})
duplex.write('hello from write side');
duplex.end();