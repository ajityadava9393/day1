//we want to build web server

const http=require('http'); //http is a libaray 
var server=http.createServer((request,response)=>{
console.log("request is recedved from cliant");
//response.write("welcome from ajitmohit server");
response.write("<h1>welcome</h1>");
response.write("<hr/>");
response.write("<ol> <li> dbda</li> <li> pgdac</li> </ol>");
response.end();
});

server.listen(5000);
console.log("HTTP server is listening on port 5000");

