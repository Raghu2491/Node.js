var con=require("http");

con.createServer(function(request,response){
    response.writeHead(200);
    response.end("Haaaha");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");

