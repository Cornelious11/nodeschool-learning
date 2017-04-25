/*
    Shopify Back End Development Intern Problem:
    Page 1: https://backend-challenge-fall-2017.herokuapp.com/orders.json
    Page 2: https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=2

    1. Read all orders from the paginated API.
    2. Any order without cookies can be fulfilled.
    3. Prioritize fulfilling orders with the highest amount of cookies.
    4. If orders have the same amount of cookies, prioritize the order with the lowest ID.
    5. If an order has an amount of cookies bigger than the remaining cookies, skip the order.

*/
var https = require('https')
var url = "https://backend-challenge-fall-2017.herokuapp.com/orders.json"

var avail
var object
var output = []

https.get(url, function (response){
    response.on('data', function (chunk){
        object = JSON.parse(chunk)
        avail = Number(object.available_cookies)
        
    })
})

function sum(a,b){
    return Number(a) + Number(b)
}

function createObj(remaining, unfulfilled){
    output.push({"remaining_cookies": remaining, "unfulfilled_orders": unfulfilled})
}