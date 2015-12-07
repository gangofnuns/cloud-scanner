var http = require('http');

var server = http.createServer(function(req, res) { 
    res.writeHead(200);
    res.end('This is the Giant Sloar.')
}); 

server.listen(8008);
  
