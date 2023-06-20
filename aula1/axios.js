// Consumo de API de preço

// To install axios you have to type this command
// npm install axios

setInterval(() => {

// Here we are setting and interval for our command block, it's like a while

const axios = require("axios");

// Here we are instantiating the axios library

axios.get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT")
    .then(response => {
        console.log(response.data.price)
    })
    .catch(error => {
        console.log(error)
    })
} , 1000)

// this get function gets the url from the website and returns a response

// this then function has a response as its parameter that is the result of the get function

// this catch is the function in case we have an error