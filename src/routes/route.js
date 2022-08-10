const express = require('express');

const router = express.Router();


//post api syntax
//we have to use 
// router.post

router.post('/test-post', function(req,res) {
    res.send([23,45,6])
});

//sending object
router.post('/test-post-obj', function(req,res) {
    res.send( { msg: 'hi', status: true } )
});


// if we want to send confidential or secured information
// like username & password
// we typically send this datas inside body
// select post > body > raw > JSON (from dropdown)
// then type Json data like key value pairs
/*
    {
        "user": "sid"
        "password": "1234"
    }
*/

router.post('/test-post-body', function(req,res) {
    let pwd = req.body.password
    let id = req.body.user;
    console.log(id, pwd)
    
    console.log(req.body)
    res.send( { msg: 'hi', status: true } )
});




// take input in a post request and add it to an array and return the new array
router.post('/test-post-4', function (req, res) {
    let arr = [12 , 'functionUp']
    let ele = req.body.element
    arr.push(ele)
    
    res.send( {msg: 'dummy'} );
})




module.exports = router;