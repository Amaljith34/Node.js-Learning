var http = require("http");
http
  .createServer((req, res) => {
    res.write("hello from http");
    res.end();
  })
  .listen("8080");
