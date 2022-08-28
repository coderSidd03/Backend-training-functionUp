
const tokenChecker = (req, res, next) => {
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "required token is missing" })

    let userId = req.params.userId
    if (!userId) return res.send({ status: false, msg: "required userId is missing" })
    next()
}


module.exports = { tokenChecker }