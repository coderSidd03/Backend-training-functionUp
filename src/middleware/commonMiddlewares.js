// here we write our middlewares codes

const mid1 = function (req, res, next) {
    console.log("i'm middleware named mid1)");
    let loggedIn = true
    // work flow
    if (loggedIn == true) {
        console.log("Ok! login is true");
        // but after it if we dont call next()
        // then our page will be stuck
        // because its rule that we have to call next() , before that res.send will not be send
        next()
        // next() is a callback func inside a middleware
        // it passes the control to the next function
        // if next () is missed or not called , the control flow will hang 
    }
    else { res.send('plz log in or register') }
}

const mid2 = function (req, res, next) {
    console.log("i'm middleware named mid2)");
    // res.send(" i am mid2 and i will end this circus")
    // if we send response before next then this response will send to o/p  
    next()
}

const mid3 = function (req, res, next) {
    console.log("i'm middleware named mid2)");
    next()
}


module.exports = { mid1, mid2, mid3 }