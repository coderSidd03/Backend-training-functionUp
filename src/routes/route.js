const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memeController= require('../controllers/memeController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/vaccinationSessionByDistrict", cowinController.vaccinationSessionByDistrict)
router.get('/temperature/getTemp', weatherController.getTemp)
router.post('/meme/editMeme', memeController.memeFunction)










// api to get the list of all the "vaccination session by district id" for any given district id and for any given date 
// router.get("/cowin/states", cowinController.getStatus)


module.exports = router;