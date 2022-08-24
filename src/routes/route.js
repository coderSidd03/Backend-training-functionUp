const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )
router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)
router.get("/basicRoute", UserController.basicCode)     //, commonMW.mid4





module.exports = router;