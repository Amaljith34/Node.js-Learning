const http=require("http")
http.createServer((req,res)=>{
    res.write("is node js is thethis  ");
    console.log(req.url);
    // console.log("test");
    // console.log("hello");
    res.end();

}).listen(3000,()=>console.log("server is renning")
)