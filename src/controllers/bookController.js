const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook = async function (req, res) {

    let book = req.body;
    let authorId = book.author;
    let publisherId = book.publisher;

    if (!authorId) res.send({ err: ">> Author_id(required) is not present.. " })
    else if (!publisherId) {
        res.send({ err: ">> Publisher is required.. " })
    } else {
        let checkAuthor = await authorModel.findById(authorId)
        let checkPublisher = await publisherModel.findById(publisherId)
        if (!checkAuthor) {
            res.send({ err: ">> Author is not present.. " })
        } else if (!checkPublisher) {
            res.send({ err: ">> Publisher is not present.. " })
        } else {
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

    // const book = await bookModel.updateMany(
    //     { publisher: { $in: ["62ff7a7403610257cebface9", "62ffc18d2717cb0965abbf2e"] } },
    //     { $set: { isHardCover: true } }
    // )


    const publisher = await publisherModel.find({name: ["HarperCollins" , "penguin"]}).select({_id: 1})

    let books = await bookModel.updateMany({publisher: publisher}, {isHardCover: true})
    let author = await authorModel.find({rating : {$gt: 3.5}}).select({_id : 1})

    let book1 = await bookModel.updateMany({author: author}, {$inc : {price: 10}})
    let book2 = await bookModel.find().populate("author publisher")

    res.send({ data: book2 });
}


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({ data: specificBook })
}

module.exports.createBook = createBook
module.exports.getAllBooksData = getAllBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.books = books
