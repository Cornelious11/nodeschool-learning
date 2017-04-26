var fs = require('fs')
var file = fs.readFileSync(process.argv[2]).toString()
var length = file.split(/\r\n|\r|\n/).length - 1

console.log(length)