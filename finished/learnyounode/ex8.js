//Importing required modules into file
var http = require('http')
var bl = require('bl')

//Declaration of global variables
var url = process.argv[2]

//Main Program Logic
http.get(url, function (response){
    response.pipe(bl(function(err,data){
        if(err){
            throw err
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
    response.on('error', console.error)
}).on('error', console.error)