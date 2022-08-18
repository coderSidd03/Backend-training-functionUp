const { count } = require("console")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find({ authorName: "HO" })
    console.log(allBooks)
    if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
    else res.send({ msg: "No books found", condition: false })
}


const updateBooks = async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks = await BookModel.findOneAndUpdate(
        { authorName: "ABC" }, //condition
        { $set: data }, //update in data
        { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
    )

    res.send({ msg: allBooks })
}

const deleteBooks = async function (req, res) {
    // let data = req.body 
    let allBooks = await BookModel.updateMany(
        { authorName: "FI" }, //condition
        { $set: { isDeleted: true } }, //update in data
        { new: true } ,
    )

    res.send({ msg: allBooks })
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBooks = updateBooks
module.exports.deleteBooks = deleteBooks







/*
my code



const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}


find , findOne
const getBooksData = async function (req, res) {

    let allBooks = await BookModel.findOne( {authorName : "PK" } )
    through this we can get any one which matches
    it returns object and if nothing found then return no match found
    if we put if else to an empty object
    empty object also evaluates as true

    null returns false

    let allBooks = await BookModel.find( {authorName : "PKs" } )

    now if we do this we will return the value inside object
    and if no match found then also we get an empty array inside object
    but for findOne we saw that we get the else part result
    so that we can define an array is a truthy value always 
    if we put if else to an empty array
    it always return true
    so in case to send else part o/p
    or identify empty [] as false then we have to just get the lingth first like so
    if(allBooks.length > 0) res.send( { msg: allBooks } )
    else res.send("No match found")
    
    
    if(allBooks) res.send( { msg: allBooks } )

    else res.send("No match found")
}

================================================

update in db

================================================
updateMany ()
const updateBooks = async function (req, res) {

    let allBooks = await BookModel.update()
    update() is depricated
    so we use updateOne() and updateMany()

    /*
    let allBooks = await BookModel.updateMany(
        { authorName: "PK" },           // condition
        { $set: {sales: 1000 } }        // update in data
    )

    res.send( { msg: allBooks} ) 
    */

    // taking user input to set data or update
//     let data = req.body
//     let allBooks = await BookModel.updateMany(
//         { authorName: "PK" },           // condition
//         { $set: data }        // update in data
        // not putting data inside {..}
        //bcz getting from body is JSON
//     )

//     res.send( { msg: allBooks } )
// }



// updateOne ()
// find first document according condition inside db and update or set the desired data

//findOneAndUpdate()        // have to visit
// it basically same as updateOne
// but it returns the document after updation but
// returns the old data not updated

// to get updated one we have to pass third operator

// const findOneAndUpdate = async function (req, res) {
//     let data = req.body
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "PK" },           // condition
//         { $set: data },                 // update in data
//         { new: true}                    // returns updated doc with findOneAndUpdate()
//     )

//     res.send( { msg: allBooks } )
// }

// now if condition was not found in db then returns null
// so to know that data is exist or not exist then
// const updateBooksOne = async function (req, res) {
//     let data = req.body
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "PK" },           // condition
//         { $set: data },                 // update in data
//         { new: true, upsert: true}      // new: true - will give you back the updated doc 
        // upsert: it finds and updates the doc   but if the doc is not found (.i.e it does not exist) then it creates a new document .i.e. Update or insert
//     )

//     res.send( { msg: allBooks } )
// }

// ================================================

// delete in db

//================================================

// const deleteBooks = async function (req, res) {
//     let allBooks = await BookModel.updateMany(
//         { authorName: "PK" },           // condition
//         { $set: {isDeleted: true} },    // just updating with isDeleted true and marking that data dirty
                                        // now we can rectify deleted data through like this way
//         { new: true }
//     )

//     res.send( { msg: allBooks } )
// }



// module.exports = { createBook, updateBooks, getBooksData, deleteBooks }


