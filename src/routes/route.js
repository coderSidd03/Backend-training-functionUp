const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

//importing middleware from : middleware/commonMiddlewares
const Middleware = require('../middleware/commonMiddlewares')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

//==============================  Middleware class  =========================================

// Global Middleware
// this midddlewares applied on every apis
//go to index.js




// this type of middleware called route based middleware
// we have to mention this kind of middleware in our every desired routes
router.get("/basicRoute" , Middleware.mid1, Middleware.mid2, Middleware.mid3 , UserController.basicCode)
// this line will execute like it first check mid1 then if true then pass to next and it goes to mid2, and in the same way it goes to mid 3 next and then if true then it will go to handler


// we can reuse those middleware(mid1, mid2, mid3) in other routes also


module.exports = router;














// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

