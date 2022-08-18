const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")
const { search } = require("../routes/route")


// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send( { msg: savedData } )
}


//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const findAuthor = async function (req, res) {

    let authorFind = await authorModel.findOne({ author_name: "Chetan Bhagat" })
    let getBooks = await BookModel.find( { author_id: { $eq: authorFind.author_id } } )

    res.send({ msg: getBooks })
}



// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)


const authorUpdatePrice = async function (req, res) {

    let findAuthor = await bookModel.findOneAndUpdate(
        { name: { $eq: "Two states" } },
        { price: 100 },
        { new: true }
    )

    let price = findAuthor.price

    let author = await authorModel.find( { author_id: { $eq: findAuthor.author_id } }).select({ author_name: 1, _id: 0 })

    res.send({author , price})
}



// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 

const rangePriceAuthor = async function (req, res) {
    let range = await BookModel.find( { price: { $gte: 50, $lte: 100 } } );
    let id_map = range.map( element => element.author_id );
    let newrange = await authorModel.find( { author_id: id_map } ).select( { author_name: 1, _id: 0 } );
    res.send(newrange);
}


module.exports = { createBook, findAuthor, authorUpdatePrice, rangePriceAuthor }
