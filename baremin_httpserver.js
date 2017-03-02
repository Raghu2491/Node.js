var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(request,response){

    var _pathname=url.parse(request.url).pathname;

    var _pathname=_uurl.pathname;
    console.log("Requested Resource is "+ _pathname+" ");

    fs.readFile(_pathname.substr(1),function (err,data) {

        if (err) {
            console.log(err.stack);
            response.writeHead(404,{'ContentType' : 'text/html'});
        }

        else{
            console.log("Requested Resource Found \n");
            response.writeHead(200,{'ContentType' : 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log("Server Running at http://127.0.0.1:8081/");