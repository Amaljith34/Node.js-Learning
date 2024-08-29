const fs=require('fs')
const readable=fs.createReadStream('./text.txt');

readable.on('data',(chunk)=>{
    console.log(`recive ${chunk.length} bytes of data`);
})
readable.on('end',()=>{
    console.log('ther is no more data');
    
})