const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createUser", commonMW.mid , UserController.createUser)
router.post("/createProduct", UserController.createProduct)
router.post("/orderPurchase", commonMW.mid , UserController.orderPurchase)




module.exports = router;