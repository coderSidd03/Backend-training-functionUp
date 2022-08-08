const express = require('express');
const underScore = require('underscore')
const lodash = require('lodash')

const intro = require('../introduction/intro')
const message = require('../logger/logger')
const details = require('../util/helper')
const validator = require('../validator/formatter')
//importing modules in a variable

const router = express.Router();

router.get('/test-me', function (req, res) {
    intro.printName()
    message.greetings()
    details.printDate()
    details.printMonth()
    details.getBatchInfo()
    validator.trim()
    validator.toLowerCase()
    validator.toUpperCase()
    
    //implementation of npm underscore library :-

    //underscore.first()
    let weekEnd = ['saturday', 'sunday', 'monday']
    let result = underScore.first(weekEnd)
    console.log('>> result of underScore.first : ', result);
    let result2 = underScore.first(weekEnd, 2)
    console.log('>> result of underScore.first : ', result2);



    //implementation of npm lodash library :-
    //lodash.chunk()
    let month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    let resultChunck = lodash.chunk(month, 3);
    console.log(">> p4. result of chunk (): ", resultChunck)

    //lodash.tail()
    let first10Odd = [1,3,5,7,9,11,13,15,17,19]
    console.log(">> p4. result of tail() :", (lodash.tail(first10Odd)));

    //lodash.union()
    let arr1 = [1,2,3,3]
    let arr2 = [10,20,31,10]
    let arr3 = [34,34,9,107,9]
    let arr4 = [24,56,24,78,96,78,96]
    let arr5 = [54,56,54,69,96,69,107]

    let resultUnion = lodash.union(arr1, arr2, arr3, arr4, arr5)
    console.log(">> p4. result of union() :", resultUnion);

    //lodash.fromPairs()
    let arr = [["horror","The Shining"], ["drama","Titanic"], ["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
    console.log(">> p4. result of formPairs() :", (lodash.fromPairs(arr)))





    res.send('My second ever api!')
});

module.exports = router;

// adding this comment for no reason