// console.log("hello nodejs");
// const arr=["a","b","c"]
// arr.push("d")
// arr.unshift("start")
// console.log(arr);
// function fn(){
//     // console.log("running");
//     return 10
    
// }
// // console.log(fn());
// // setInterval(()=>{
// //     console.log("hello");
    
// // },5000)
// console.log(global);
// global.console.log("hello")
// console.log(__filename)
// console.log(__dirname);
const http=require("http")
http.createServer((req,res)=>{
    res.write("is node js is thethis  ");
    console.log(req.url);
    // console.log("test");
    // console.log("hello");
    res.end();

}).listen(3000,()=>console.log("server is renning")
)

 

