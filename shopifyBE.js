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

var urls = ["https://backend-challenge-fall-2017.herokuapp.com/orders.json","https://backend-challenge-fall-2017.herokuapp.com/orders.json?page=2"]

var avail
var count = 0
var object = []
var output = []
// Looping through all API urls
urls.forEach(function(url){
    https.get(url, function(request){
        request.on('data',function(chunk){
            data = JSON.parse(chunk)
            avail = Number(data.available_cookies)
            // Placing all orders into one JSON object
            data.orders.forEach(function (order){
                order.products.forEach(function(product){
                    // Ignoring any orders that do NOT contain Cookies and are not already filled
                    if(product.title === 'Cookie' && order.fulfilled !== true){
                        object.push(order)
                    }
                })
            })
            count ++
            // Condition if we have reached the end of the input urls
            if(count == urls.length){
                object.sort(orderSort)
                fillOrders()
                console.log(output)
            }
        })
    })
})

/**
 * Checks the number of available cookies and fulfills the cookies
 */
function fillOrders(){
    var notfilled = []
    object.forEach(function (order){
        if(avail >= numCookies(order)){
            avail -= numCookies(order)
            order.fulfilled = true
        } else {
            notfilled.push(Number(order.id))
        }
    })
    createObj(avail, notfilled)
}

function numCookies(a){
    var cookies = 0
    a.products.forEach(function (product){
        if(product.title === 'Cookie'){
            cookies = product.amount
        }
    })
    return cookies
}

/**
 * Compares amount of cookies ordered, and if the same will compare order ID
 * @param {*} a first item to compare
 * @param {*} b second item to compare
 */
function orderSort(a,b){
    var aVal = numCookies(a)
    var bVal = numCookies(b)
    if(aVal !== bVal){
        return bVal - aVal
    } else {
        return a.id - b.id
    }
}

/**
 * Creating the JSON object to send back
 * @param {*} remaining Integer value of remaining cookies
 * @param {*} unfulfilled Array of order ID's that were not fulfilled
 */
function createObj(remaining, unfulfilled){
    output.push({"remaining_cookies": remaining, "unfulfilled_orders": unfulfilled})
}