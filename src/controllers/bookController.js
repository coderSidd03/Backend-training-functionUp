const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {

    let book = req.body;
    let authorId = book.author;
    let publisherId = book.publisher;

    if (!authorId) res.send({ err: ">> Author_id(required) is not present.. " })
    else if (!publisherId) res.send({ err: ">> Publisher is required.. " })
    else {
        let checkAuthor = await authorModel.findById(authorId)
        let checkPublisher = await publisherModel.findById(publisherId)

        if (!checkAuthor) res.send({ err: ">> Author is not present.. " })
        else if (!checkPublisher) res.send({ err: ">> Publisher is not present.. " })
        else {
            let createdBook = await bookModel.create(book)
            res.send({ msg: createdBook })
        }
    }
}
const getAllBooksData = async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({ data: books })
}
const books = async function (req, res) {

    const findPublisher = await publisherModel.find({ name: ["HarperCollins", "penguin"] }).select({ _id: 1 })

    let hardCoverUpdated = await bookModel.updateMany(
        { publisher: findPublisher },
        { isHardCover: true }
    )

    let findAuthor = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })

    let bookPriceUpdated = await bookModel.updateMany(
        { author: findAuthor },
        { $inc: { price: 10 } }
    )

    let findBook = await bookModel.find().populate("author publisher")

    res.send({ data: findBook });
}
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({ data: specificBook })
}
const ratingAuthorDecrease = async function (req, res) {

    let authorAbove90 = await authorModel.find({ age: { $gt: 89 } }).select({ _id: 1 })
    // finding the author age greater than: 89 inside author collection and selecting those _ids
    let updateDecreaseBookRating = await bookModel.updateMany(
        { author: authorAbove90 },
        { $inc: { price: 50 } }
    )
    // for that particular authors changing(increasing) the price of their written book inside bookModel
    let sendData = await bookModel.find().populate("author publisher")
    res.send({ data: sendData })
}
const authorSelectBookRatingChanges = async (req, res) => {

    let findAuthor = await authorModel.find({ author_name: { $eq: "Satyajit Ray" } }).select({ _id: 1 })
    // finding the author name : "Satyajit roy" inside author collection and selecting those _ids

    let changedBookRatings = await bookModel.updateMany(
        { author: findAuthor },
        { $inc: { ratings: -1.0 } }
    )
    // for that particular author changing(decreasing) the ratings of their written book inside bookModel

    let sendData = await bookModel.find().populate("author")
    res.send(sendData)
}
module.exports = {createBook, getAllBooksData, getBooksWithAuthorDetails, books, ratingAuthorDecrease, authorSelectBookRatingChanges}
