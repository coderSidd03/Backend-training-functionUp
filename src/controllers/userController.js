const userModel = require("../models/userModel")

const createUser = async function (req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({ msg: savedData })
}
const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers })
}


const basicCode = async function (req, res) {
    // if data receiving from header then we access that data like
    let headerData = req.headers

    console.log('headerData above');
    console.log('congrats u r on the handler');
    res.send({ data: headerData })
}


module.exports = { createUser, getUsersData, basicCode }