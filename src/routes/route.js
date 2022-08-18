const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createAuthor", authorController.createAuthor )

router.post("/createBook", BookController.createBook )

router.get("/findAuthor", BookController.findAuthor)

router.get("/authorUpdatePrice", BookController.authorUpdatePrice)

router.get("/rangePriceAuthor", BookController.rangePriceAuthor)

module.exports = router;