// Module Import
var net = require('net')

// Global Variables
var port = Number(process.argv[2])

// Logic
var server = net.createServer(function(socket){
    var date = new Date()
    socket.end(date.getFullYear()+
                "-"+('0'+(date.getMonth()+1)).slice(-2)+
                "-"+('0'+date.getDate()).slice(-2)+
                " "+('0'+date.getHours()).slice(-2)+
                ":"+('0'+date.getMinutes()).slice(-2)+
                "\n")
})
server.listen(port)