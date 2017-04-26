var fs = require('fs')

var buffer = fs.createReadStream(process.argv[2])
buffer.pipe(process.stdout)