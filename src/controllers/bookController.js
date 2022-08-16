const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0});
    res.send({ msg: allBooks })
}


const getBooksInYear = async function(req, res) {
    let year = req.query.year;
    let books = await BookModel.find({year: year})
    res.send({data: books})
}

const getXINRBooks = async function(req, res) {
    let allbooks = await BookModel.find( {"prices.indianPrice" : {$in: [100,200,500]} }  )
    res.send({data: allbooks})
}

const getRandomBooks = async function(req, res) {
    
    let randBooks = await BookModel.find( {$or: [ { stockAvailable: true}, { totalPages: {$gt: 500} } ] } )
    res.send({data: randBooks})
}

// const getParticularBooks = async function(req, res) {
//     let {$var} = req.body.{$var2}
//     let books = await BookModel.find( {"{$var}": "{$var2}"} )
//     res.send(books)
// } 

module.exports.createBook = createBook;
module.exports.getBookList = getBookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getXINRBooks = getXINRBooks;
// module.exports.getRandomBooks = getRandomBooks;

























