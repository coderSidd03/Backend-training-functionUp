const BookModel = require("../models/bookModel")

//------------------------ 1 ---------------------------------------*\
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

//------------------------ 2 ---------------------------------------*\
const getBookList = async function (req, res) {
    let allBooks = await BookModel.find().select( { bookName: 1, authorName: 1, _id: 0 } );
    res.send({ msg: allBooks })
}

//------------------------ 3 ---------------------------------------*\
const getBooksInYear = async function (req, res) {
    let year = req.query.year;
    let books = await BookModel.find({ year: {$eq: year} })
    res.send({ data: books })
}

//------------------------ 4 ---------------------------------------*\
const getParticularBooks = async function (req, res) {
    let data = req.body
    let books = await BookModel.find(data)
    res.send({ msg: books })
}

//------------------------ 5 ---------------------------------------*\
const getXINRBooks = async function (req, res) {
    let allbooks = await BookModel.find({ "prices.indianPrice": { $in: [100, 200, 500] } })
    res.send({ data: allbooks })
}

//------------------------ 6 ---------------------------------------*\
const getRandomBooks = async function (req, res) {

    let randBooks = await BookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ data: randBooks })
}



module.exports = {
    createBook,
    getBookList,
    getBooksInYear,
    getParticularBooks,
    getXINRBooks,
    getRandomBooks,
};

// module.exports.createBook = createBook;
// module.exports.getBookList = getBookList;
// module.exports.getBooksInYear = getBooksInYear;
// module.exports.getParticularBooks = getParticularBooks;
// module.exports.getXINRBooks = getXINRBooks;
// module.exports.getRandomBooks = getRandomBooks;

























