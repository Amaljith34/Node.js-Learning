const { write } = require('fs')
const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("homepage")
        res.end()
    }
    else if(req.url==="/about"){
        res.write("about page")
        res.end()
    }
    else if(req.url==="/contact"){
        res.write("contact page")
        res.end()
    }

    // res.write("hellooo  from server using httpmodule")
    // res.end()
})
server.listen(8080)