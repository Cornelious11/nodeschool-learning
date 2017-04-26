var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]

var dirContents

fs.readdir(path, function (err, data) {
    dirContents = data;
    dirContents = dirContents.filter(getExt)
    dirContents.forEach(function(entry){
        console.log(entry)
    })
})

function getExt(filename){
    filename = filename.split('.')
    filename = filename[1]
    return filename === ext
}

/*
Nodeschool.io solution:
-------------------------------------------
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]
module.exports = function (dir, filterStr, callback) {
    fs.readdir(folder, function (err, files) {
        if (err) return console.error(err)
        files.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
        })
    })
}
*/