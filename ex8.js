//Importing required modules into file
var http = require('http')
var bl = require('bl')

//Declaration of global variables
var url = process.argv[2].toString

//Main Program Logic
http.get(url, function (response){
    //response.setEncoding('utf8')
    response.pipe(bl(function(err,data){
        if(err){
            throw err
        }
        console.log(data)
    }))
    response.on('error', console.error)
}).on('error', console.error)