var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('Server running!');

function doRequest(req,res) {
    fs.readFile('./hello.html', 'UTF-8',
        (err, date) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(date);
            res.end();
        }
    );
}
