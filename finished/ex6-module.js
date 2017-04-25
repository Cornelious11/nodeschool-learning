var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function (err, data){
        if(err){
            return callback(err)
        }
        
        data = data.filter(function (file) {
            return path.extname(file) === '.'+ext
        })
        callback(null, data)
    })
}
/*
Nodeschool.io solution:
-------------------------------------------
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
    if (err) {
        return callback(err)
    }

    list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
    })
}
*/