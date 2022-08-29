const userModel = require('../models/userModel')
const JWT = require('jsonwebtoken')
const moment = require('moment')


const createUser = async (req, res) => {
    let userData = req.body;
    let createdUser = await userModel.create(userData)
    res.send({ status: true, data: createdUser })
}

const userLogin = async (req, res) => {
    let userEmail = req.body.emailId;
    let userPassword = req.body.password;

    let findUser = await userModel.findOne({ emailId: userEmail, password: userPassword })
    if (!findUser) return res.send({ status: false, msg: "incorrect emailId or Password " })

    let createdToken = JWT.sign(
        {
            UserId: findUser._id.toString(),
            batch: "Plutonium",
            organisation: "Function-up",
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        },
        "plutonium--secret-token--created: soumyadeep chakraborty--"
    )
    res.setHeader("x-auth-token", createdToken)
    return res.send({ status: true, token: createdToken })
}

const getUserData = async (req, res) => {
    let userId = req.params.userId
    let findUserData = await userModel.findById(userId)
    if (!findUserData) return res.send({ status: false, msg: "No such user exists" });
    res.send({ status: true, data: findUserData })
}

const updateUser = async (req, res) => {
    let data = req.body
    let userId = req.params.userId
    const updateUserData = await userModel.findOneAndUpdate({ _id: userId }, data, { new: true })
    res.send({ status: true, data: updateUserData })
}

const deleteUser = async (req, res) => {
    let UserId = req.params.userId
    let deletedUser = await userModel.findOneAndUpdate(
        { _id: UserId },
        { isDeleted: true },
        { new: true }
    )
    res.send({ status: true, data: deletedUser })
}



module.exports = { createUser, userLogin, getUserData, updateUser, deleteUser }