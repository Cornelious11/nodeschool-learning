// Importing required modules
var http = require('http')

// Global Variable declarations
var port = process.argv[2]

// Program Logic
var server = http.createServer(function(request, response){
    if(request.method !== 'POST'){
        response.end('please use POST data')
    }
    var body = ""
    request.on('data', function(chunk){
        body += chunk
        body = body.toUpperCase()
    })
    request.on('end', function(){
        response.writeHead(200)
        response.end(body)
    })
})
server.listen(port)