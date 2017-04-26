function add(a, b){
    return Number(a) + Number(b)
}

console.log((process.argv.splice(2)).reduce(add, 0))