var http = require('http');
var dt = require('/Users/olatunbosunoyeleke/myfirstmodule.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time in Nottingham, England is: " + dt.myDateTime());
    res.end();
}).listen(8080);