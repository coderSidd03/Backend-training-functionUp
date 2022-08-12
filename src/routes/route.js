const express = require('express');
// const UserModel = require('../models/userModel')
const UserController = require ('../controllers/userController.js')
const router = express.Router();


// we write await before function
//await before model

router.post('/createUser', UserController.createUser )
// UserController.createUser     => this is called handler
//it will call the function createUser from usercontroller.js file


// router.get('/getUserData', async function (req, res) {  
//     let allUsers = await UserModel.find()               //it will return all data inside user collection
//     res.send( {msg: allUsers} )
// })

router.get('/getUserData', UserController.getUser)
//in the above way we can take controllers function here and perform task in a single line

module.exports = router;