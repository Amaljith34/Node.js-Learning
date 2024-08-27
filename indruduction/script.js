const path=require("path")
// console.log(path);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename).ext);
// console.log(path.parse(__filename).name);
// console.log(path.join(__filename,"api","script.js"));
console.log(path.join(__dirname,"api","script.js"));
// console.log(path.dirname(__filename));


            ///remove 
// const fs=require("fs");
// // const { error } = require("console");
// console.log(fs);
// fs.rmdir(path.join(__dirname,"/api"),{},(err)=>{
//     if(err) throw err
// })


            ///create file or folder
// const fs=require("fs");
// // const { error } = require("console");
// console.log(fs);
// fs.mkdir(path.join(__dirname,"/api2"),{},(err)=>{
//     if(err) throw err
// })

     //file creation
// const fs=require("fs");
// // const { error } = require("console");
// console.log(fs);
// const user="ajmel"
// fs.writeFile(path.join(__dirname,"/api.js"),`user age: ${user}`,(err)=>{
//     if(err) throw err
// })


   //appendfile

//    const fs=require("fs");
// // const { error } = require("console");
// console.log(fs);
// const user="anjali"
// fs.appendFile(path.join(__dirname,"/api"),`\nname:${user}`,(err)=>{
//     if(err) throw err
// })

  ///readfile

//   const fs=require("fs");
//   // const { error } = require("console");
//   console.log(fs);
//   const user="anjali"
//   fs.appendFile(path.join(__dirname,"/api"),`\nname:${user}`,(err)=>{
//       if(err) throw err
//   })


// const fs=require("fs");
//   // const { error } = require("console");
// //   console.log(fs);
//   const user="anjali"
//   fs.mkdir(path.join(__dirname,"/api.text",),`name:${user}`,(err,data)=>{
//       if(err) throw err
//       // console.log(data);
      
//   })



const fs=require("fs")
const user="Athul"
// fs.appendFile(path.join(__dirname,"/api1"),`\nname:${user}`,(err)=>{
//   if(err) throw(err)
// })
fs.readFile(path.join(__dirname,"api1"),"utf8",(err,data)=>{
  if(err) throw err
  console.log(data);
  
})



