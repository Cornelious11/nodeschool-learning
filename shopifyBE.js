var https = require('https')
var url = "https://backend-challenge-fall-2017.herokuapp.com/orders.json"

var avail
var object

https.get(url, function (response){
    response.on('data', function (chunk){
        object = JSON.parse(chunk)
        avail = Number(object.available_cookies)
        object.orders.sort(function(a,b){
            return a.products[a.products.indexOf(a.products.title === "Cookie")] - b.products[b.products.indexOf(a.products.title === "Cookie")]
        })
        object.orders.forEach(function(order){
            // if(!Boolean(order.fulfilled)){
                console.log("\n")
                console.log(order.id)
                console.log(order.customer_email)
                order.products.forEach(function (product){
                    console.log(product.title+": "+product.amount)
                })
            // }
        })
    })
})