const { URL } =require('url')
const url=new URL('https://example.com:8000/path/name?query=123#fragment')
console.log(url.href);
console.log(url.port);
console.log(url.pathname);
console.log(url.hostname);
console.log(url.search);


