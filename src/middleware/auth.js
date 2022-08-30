const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel.js')


const authenticate = function (req, res, next) {

    // extracting the token from request's headers
    let token = req.headers['x-auth-token'];
    // checking if not token ..
    if (!token) return res.send({ status: false, msg: "token must be present" });

    // else verifying that token
    // verify takes two parameter
    // jwt.verify(<token from header>, "secret <used to create that token>")
    let decodedToken = jwt.verify(token, "plutonium--secret-token--created: soumyadeep chakraborty--");

    // checking if not decodedToken .i.e. given token is not a valid token
    // to check => jwt.io
    if (!decodedToken) res.send({ status: false, err: "Invalid Token !!!" })
    // setting thisdecodedToken in the response headers and passing the value of this function's data stored in decodedToken
    req.decodedToken = decodedToken

    next()
}


const authorise = async function (req, res, next) {

    // extracting the userId from the decodedToken's sent data( req.decodedToken ) from function authentication (we use both these function as middlewares in route.js) ... i.e the extracting the userId which is attached with the token

    // that means that user who has logged in
    let userLoggedIn = req.decodedToken.userId


    // extracting the userId from the path params that means which user is using our application and requesting any route which needs a validation...
    // that means that user who trying to access routes
    let requestingUserId = req.params.userId;

    // now checking that both user are same or not (the user requesting and the user has logged in) 
    // if not sending error
    if (userLoggedIn != requestingUserId) return res.send({ status: false, err: "user mismatch !! " })

    // querying in userModel with the id we got from params
    let userDetails = await userModel.findById(requestingUserId)
    // if id not matched sending error
    if (!userDetails) return res.send({ status: false, msg: 'No such user exists' })

    // now sending outside the datas collected here to reuse 
    req.userDetails = userDetails
    req.requestingUserId = requestingUserId
    req.userLoggedIn = userLoggedIn
    
    next()
}


module.exports = { authenticate, authorise }
// , authorise