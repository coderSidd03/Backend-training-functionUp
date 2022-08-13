const bookModel = require('../models/bookModel')

let createBook = async function(req, res) {
    let bookData = req.body;
    let createdBook = await bookModel.create(bookData);
    res.send( { msg: createdBook } );
};

let getBooksData = async function(req, res) {
    let allBooks = await bookModel.find();
    res.send( { msg: allBooks } )
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;

