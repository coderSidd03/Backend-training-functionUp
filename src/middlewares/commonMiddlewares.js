
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

/*
<!-- ASSIGNMENT:- -->
Write a middleware that logs (console.log) some data everytime any API is hit
Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
For this first figure out how to get the route location being requested, how to get current timestamp and how to get the IP.
NOTE: ip of local computer will come as ::1 so dont get disturbed by seeing this)

e.g: you should be logging something like this on each line:
time , IP, Route should be printed on each line in terminal( every time an api is hit)
2010-08-19 14:00:00 , 123.459.898.734 , /createUser
2010-08-19 14:00:00 , 123.459.898.734 , /basicAPi
2010-08-19 14:00:00 , 123.459.898.734 , /falanaAPI
*/

// var address = require('address');
// var moment = require('moment')
// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     const date = moment().format('MMMM Do YYYY, h:mm:ss a');
//     const IP = address.ip()
//     const api = req.path
//     console.log(date + " , " + IP + " , " + api)
//     next()
// }











// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
