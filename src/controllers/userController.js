
// we create controller folder and write controller logic insidde it bcz
// to organize our code
// here we imported the userModel from model folder

const UserModel = require('../models/userModel')


//then created two functions inside variable 

const createUser = async function (req, res) {    
    let data = req.body
    let savedData = await UserModel.create(data)        // it means we are telling to UserModel to create a data
    res.send( {msg: savedData} )
}


const getUser = async function (req, res) {  
    let allUsers = await UserModel.find()               //it will return all data inside user collection
    res.send( {msg: allUsers} )
}



//and exporting those
module.exports.createUser = createUser
module.exports.getUser = getUser