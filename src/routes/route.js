const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middlwares = require('../middlewares/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.userLogin)

router.get('/users/:userId', middlwares.tokenChecker, userController.getUserData)

router.put('/users/:userId', middlwares.tokenChecker, userController.updateUser)

router.get('/users/delete/:userId', middlwares.tokenChecker, userController.deleteUser)

module.exports = router;