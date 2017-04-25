// Adding in necessary modules into the file
var HTTP = require('http')
var BL = require('bl')

// Creating the global variables
var URLs = [process.argv[2],process.argv[3],process.argv[4]]

URLs.forEach(function(url){
    //console.log(url)
    HTTP.get(url, function(response){
        response.pipe(BL(receiveData))
    })
})

function receiveData(err, data){
    if (err){
        throw err
    }
    data = data.toString()
    console.log(data)
}