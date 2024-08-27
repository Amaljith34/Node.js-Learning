// const http=require('http');
// const PORT=3000;
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Contact-Type':"text/html"})

//     res.end("hello world")
// })
// server.listen(PORT,()=>{
//     console.log(`SERVER RUN AT ${PORT}`);
    
// })


const http=require('http');
const fs=require('fs')
const PORT=3005;
const server=http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile('one.html',(err,data)=>{
        if(err){
            res.writeHead(404)
            // res.writeHead(404,{"content-Type":"text/html"})
            res.write('error')
        }
        else {
            // res.writeHead(200,{"content-Type":"text/html"})
            res.write(data)
        }
        res.end()
    })
    // res.write("helooo")
    
})
server.listen(PORT,()=>{
    console.log(`SERVER RUN AT ${PORT}`);
    
})