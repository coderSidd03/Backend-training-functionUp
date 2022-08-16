const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    //we are now chaining commands
    // let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  ).count()   // AND and then Count
    // as we add count() // it works like find those element authorName: sk and ispublished true
    // then count those and store it inside allBooks
    //count gives us no.of documents that satisfy prev condition

    // let allBooks= await BookModel.find( {
    //     $or: [{ authorName : "Chetan Bhagat" } , { isPublished: true, sales: 10 }]
    // }).select( {bookName: 1, authorName: 1, _id:0})                 // select keys that we want 
    // $or  => this is or operator we can check like above syntax and check multiple conditions as one or another or another like so. any one of the given condition matched this should return that doc.

    // _id:0   => without this id will be shown automatically

    // let allBooks = await BookModel.find().sort( {sales: -1})   //Sort




    //-----// multiple query condition//-----
    // let allBooks = await BookModel.find().limit(10)
    // limit sets here 
    // we need first 10 books

    // let allBooks = await BookModel.find().sort({sales: -1}).limit(10)
    // through this we will get last 10 books , first sort as sales in descending order (sales: -1) 
    // then limitting the value to 10 


    // let allBooks = await BookModel.find().sort({sales: -1}).limit(10).select( {bookName: 1, authorName: 1, _id:0})
    // then it will select all those books name and authorname in ascending order


    // PAGINATION
    // let page = req.query.page
    // let allBooks = await BookModel.find().skip(2 * (page-1)).limit(10)
    // skip is basically moves the page according to use
    // page is the input user put which page he wanna go, then skipping before all pages from that number
    // we can take page as req.param, req.query 
    // and multiplyting with no. elements we want to show in every page

    
    
    // let page = req.query.page
    // let allBooks = await BookModel.find().sort({sales: -1}).skip(2 * (page-1)).limit(10).select( {bookName: 1, authorName: 1, _id:0})


    // let allBooks = await BookModel.find( { authorName: "PK"} )
    // we can write this like this
    // let allBooks = await BookModel.find( { authorName: {$eq: "PK"} } )
    //its comparing authorname and pk then stores those

    // let allBooks = await BookModel.find( { sales: { $eq: 137 } } )
    // returns all book whose sales is equal 137

    // let allBooks = await BookModel.find( { sales: { $gt: 137 } } )
    // returns all book whose sales is greater than 137

    // let allBooks = await BookModel.find( { sales: { $lt: 137 } } )
    // returns all book whose sales is less than 137
    

    // let allBooks = await BookModel.find( { sales: { $lte: 137 } } )
    // returns all book whose sales is less than equalto 137

    // let allBooks = await BookModel.find( { sales: { $gte: 137 } } )
    // returns all book whose sales is greater than equalto 137


    // let allBooks = await BookModel.find( { sales: { $ne: 137 } } )
    // returns all book whose sales is not equalto 137


    // let allBooks = await BookModel.find( { $or: [{ sales: { $eq: 10 } }, { sales: { $eq: 17 } }, { sales: { $eq: 82 } }] } )
    // this will return those books  whose sales equal to 137 or 13 or 65

    // we can do this like this also
    // using $in operator
    // let allBooks = await BookModel.find( { sales: { $in: [10, 17, 82] } } )
    // basically returns find sales=10, sales= 17 , sales=82

    // opposite of $in is $nin
    // not in
    // let allBooks = await BookModel.find( { sales: { $nin: [17, 82, 137] } } ).select({ sales: 1, _id:0 })


    // 
    // let allBooks = await BookModel.find( { $and: [{   sales:{ $gt: 20 } , sales:{ $lt: 100}   }] } ) // sales is between 20 & 100
    // sales >= 20 and <=100
    // if we are using condition at a same key then we have to use {$and: [{   sales:{ $gt: 20 } , sales:{ $lt: 100}   }]}
    // we dont just use {   sales:{ $gt: 20 } , sales:{ $lt: 100}   }


    // another shorter way to use between :
    // let allBooks = await BookModel.find( {   sales:{ $gt: 20, $lt: 100 } } ) // sales is between 20 & 100


    // findById
    // let allBooks = await BookModel.findById( "621c691a65e23b3cc634f619" ) // returns book as total object with this particular id
    // but find returns an array

    //findOne
    // let allBooks = await BookModel.findOne( {sales: 10} ) // returns a single book(single object) whose sales is 10



    // update
    // let allBooks = await BookModel.update( {condition}, {update that we are looking} )

    // let allBooks = await BookModel.update( 
    //     { sales: {$gt: 10} }, 
    //     {$set: { isPublished: true } } 
    //     );

        // updating whose sales greater than 10
        // changing those's ispublished as true
        
    // have to check these
    // updateOne
    // finByIdAndUpdate






    

    //====================================================================

    // REGEX
    // find all those whose name starts with 'int'
    // let allBooks = await BookModel.find  ( {bookName: /^Int/ } )
    // find me all the books name whose starts with 'INT'
    // ^ use to identify starts with
    //  REGEX is case sensitive

    // let allBooks = await BookModel.find  ( {bookName: /^Int/i } )
    // if we put i then case sensitive won't work


    // let allBooks = await BookModel.find  ( {bookName: /5$/ } )
    // returns whose bookName ends with 5

    // let allBooks = await BookModel.find  ( {bookName: /.*programming.*/ } )
    // will return books where programming as in between whose bookname 


    //=======================================================================
    //ASYNC AWAIT


    let a = 4 + 2;
    a = a + 10
    console.log(a);

    let allBooks = await BookModel.find  (  )

    let b = 14
    b= b + 10
    console.log(b);

    // we use await to do js it's smart work
    // basically what its doing first it will print the code all lines before await
    // then hold that function while it's getting datas from database and then rest of code executes
    // and run next lines code
    // we use await  only when we need data from outside of codefile like db
    // without AWAIT JS runs network calls (like db calls) asynchronously ,but await makes it synchronous

    // but in case we need the result in this very function we await it, await makes it synchronous
    // it's tells js dont execute next line untill this line is not executed


    // ASYNC
    // async sends signals to js that to carefull to next lines there will be some changes inside those 
    

    // when asyn await use :-
    
    // await ->
    //1. when interacting with db
    //2. in axios calls (when interacting with another function)

    // AWAIT can not be used inside forEach, map and many of the array function


    // 
    // we will get promise pending
    
    
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData

























