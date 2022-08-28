
const tokenChecker = (req, res, next) => {
    // checking header for token
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "required token is missing" })

    // verifying the token
    let decodedToken = JWT.verify(token, "plutonium--secret-token--created: soumyadeep chakraborty--")
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" })

    // checking userId
    let userId = req.params.userId
    if (!userId) return res.send({ status: false, msg: "required userId is missing" })

    // verifying userId
    let findUserData = await userModel.findById(userId)
    if (!findUserData) return res.send({ status: false, msg: "userId is invalid" })
    next()
}


module.exports = { tokenChecker }