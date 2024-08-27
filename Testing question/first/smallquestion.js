const http=require('http');
const PORT=3002;
const fs=require('fs')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('test.html',(err,data)=>{
        if(err) {
            res.writeHead(404);
            res.write('error')
        }
        else{
            res.write(data)
        }
        res.end()
    })
 
})
server.listen(PORT,()=>{
    console.log(`SERVER RUNNING ${PORT}`);
})