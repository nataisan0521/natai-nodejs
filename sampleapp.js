var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
// server.listen(process.env.PORT, process.env.IP);
server.listen(1234);
console.log('Server running!');

function doRequest(req,res) {
    var number = Math.floor(Math.random() * 3);
    fs.readFile('./hello.html', 'UTF-8',
        (err, date) => {
            var title = ["ページA", "ページB", "ページC"];
            var content = ["※これはサンプルで作ったものです。",
                "もう一つのコンテンツです。",
                "最後に用意したコンテンツですよ。"];
            var data2 = date.
                replace(/@title@/g, title[number]).
                replace(/@content@/g, content[number]);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data2);
            res.end();
        }
    );
}
