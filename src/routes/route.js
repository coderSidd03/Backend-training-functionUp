const express = require('express');

const router = express.Router();


//  Q1. -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get('/sol1', (req, res) => {
    let arr = [1, 2, 3, 5, 6, 7];
    let total = 0;

    for (let i=0; i<arr.length; i++) {
        total = total + (arr[i]);
    }

    let lastElem = arr.pop();
    let allElemSum = (lastElem * (lastElem + 1)) / 2;
    let missingElem = allElemSum - total;

    res.send(">> the missing element inside array is : " + missingElem);
})



//  Q2. -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
router.get('/sol2', (req, res) => {

    let arr = [33, 34, 35, 37, 38];
    let length = arr.length
    let total = 0;

    for (let i in arr) {
        total += arr[i];
    }

    let frstElem = arr[0];
    let lastElem = arr.pop()
    let allElemSum = (length + 1) * (frstElem + lastElem) / 2;
    let missingElem = allElemSum - total;

    res.send(">> the missing element inside array is : " + missingElem);
})
module.exports = router;