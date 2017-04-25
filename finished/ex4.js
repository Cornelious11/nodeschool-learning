var fs = require('fs')

var length
var content
var file = process.argv[2]

fs.readFile(file, function (err, data) {
    content = data
    content = content.toString().split('\n')
    length = content.length - 1
    console.log(length)
})