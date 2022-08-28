

const mid = function (req, res, next) {
    let headerData = Boolean(req.headers['isfreeappuser'])
    if (!headerData) res.send({ status: false, data: "the request is missing a mandatory header" })
    else next()
}



module.exports.mid= mid

