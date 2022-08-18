const { count } = require("console")
const AuthorModel = require('../models/authorModel')

const createAuthor = async function (req, res) {
    let data = req.body
    let authorId = data.author_id
    if (!authorId) res.send({ status: false, msg: "author_id must be present" })
    else {
        let savedData = await AuthorModel.create(data)
        res.send({ msg: savedData })
    }
}



module.exports.createAuthor = createAuthor
