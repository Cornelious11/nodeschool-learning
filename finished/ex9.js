// Adding in necessary modules into the file
var HTTP = require('http')
var BL = require('bl')

// Creating the global variables
var URLs = [process.argv[2],process.argv[3],process.argv[4]]
var results = []
var count = 0

URLs.forEach(function(url){
    HTTP.get(url, function(response){
        var temp = URLs.indexOf(url)
        response.pipe(BL(function(err,data){
            data = data.toString()
            results[temp] = data
            count ++
            if(count === 3){
                printResults()
            }   
        }))
    })
})

function printResults () {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}