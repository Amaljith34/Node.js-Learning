// const http=require("http")
// http.createServer((req,res)=>{
//     res.write("is node js is thethis the worlsd  any ");
//     console.log(req.url);
//     // console.log("test");
//     // console.log("hello");
//     res.end();

// }).listen(3000,()=>console.log("server is renning")
// )


const http=require("http");
const fs=require("fs");
const path = require("path");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile(path.join(__dirname,"api2","test.html"),"utf8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data)
        })
    }
    else if(req.url==="/contact"){
        fs.readFile(path.join(__dirname,"api2","contact.html"),"utf8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data)
        })
    }
    


    // res.writeHead(200,{"Content-Type":"text/html"})
    // console.log(req.url);
    // res.write("<h1>hello<h1>")
    // console.log("test");
    // console.log("hello");
    // res.end();

})
const PPP=process.env.PORT || 3001;
server.listen(PPP,()=>console.log((`SERVER RUNNING ON ${PPP}`)))