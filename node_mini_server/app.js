var http = require('http');
var fs = require('fs');
var port = process.env.port;
// process.env // envirnoment

var server = http.createServer(onRequest);
server.listen(port);

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});

    // 서버는 수정한 후에 재시작을 해야한다.
    //console.log(fileJSON);

    var fileHeader = fs.readFileSync('header.html');
    var fileData = fs.readFileSync('data.dat');
    var fileFooter = fs.readFileSync('footer.html');
    //console.log(file);
    
    response.write(fileHeader);
    response.write(fileData);
    response.write(fileFooter);

    //console.log(fileJSON);
    //response.write('Hello nodejs');
    response.end();

}

