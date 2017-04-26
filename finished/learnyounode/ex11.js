// Adding modules
var http = require('http')
var fs = require('fs')

// Global variables
var port = Number(process.argv[2])
var filename = process.argv[3]

//Logic
var server = http.createServer(function(request, response){
    var stream = fs.createReadStream(filename)
    stream.pipe(response)
})
server.listen(port)