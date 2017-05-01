var through = require('through2')
var split = require('split')
var stream = through(write, end)

function write(buffer, encoding, next){
    this.push(String(buffer).toUpperCase())
    next()
}

function end(done){
    done()
}

process.stdin.pipe(stream).pipe(process.stdout)