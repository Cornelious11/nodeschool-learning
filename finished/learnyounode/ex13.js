// Adding required Modules
var http = require('http')
var url = require('url')

// Global Variables
var output = []
var port = Number(process.argv[2])
// Program Logic
var server = http.createServer(function(request, response){
    if(request.method !== 'GET'){
        response.end("Please use a GET request")
    }
    var urlQuery = url.parse(request.url, true)
    var date = new Date(urlQuery.query.iso)
    if(urlQuery.pathname === "/api/parsetime"){
        isoTime(date.getHours(), date.getMinutes(), date.getSeconds())
    }
    if(urlQuery.pathname === "/api/unixtime"){
        unixTime(date.getTime())
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(output.pop()))
})
server.listen(port)
/**
 * Creates a JSON object that will contain the time in a ISO Time standard
 * @param {*} hour Hour to put in object
 * @param {*} minute Minute to put in object
 * @param {*} second Second to put in object
 */
function isoTime(hour, minute, second){
    output.push({"hour": hour, "minute": minute, "second": second})
}

/**
 * Creates a JSON object that will contain the time in a Unix Time standard
 * @param {*} unixtime time in Unix format
 */
function unixTime(unixtime){
    output.push({"unixtime": unixtime})
}