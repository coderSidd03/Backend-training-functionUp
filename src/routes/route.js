const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/movies', function (req, res) {
    let movies = ["Tenet", "The Avengers", "Iron Man", "Captain America: Civil War", "Avengers: End Game"]
    res.send(movies)
});

router.get('/movies/:indexNumber', function (req, res) {

    let movies = ["Tenet", "The Avengers", "Iron Man", "Captain America: Civil War", "Avengers: End Game"]
    let requestParams = req.params
    let number = requestParams.indexNumber;
    (number > movies.length) ?
        res.send('>> use valid index between < 1 to ' + movies.length + ' > to get data \t >> check full collection http://localhost:3000/movies') : res.send(">> " +number+ " >> "+ movies[number - 1])
});


router.get('/films', function (req, res) {

    let films = [
        {
            "id": 1,
            "name": "The Matrix: Resurrection"
        }, 
        {
            "id": 2,
            "name": "Thor Ragnarok"
        }, 
        {
            "id": 3,
            "name": "Dr. Strange: Madness in the multiverse"
        }, 
        {
            "id": 4,
            "name": "Spiderman: No Way Home"
        }
    ]
    res.send(films)
});

router.get('/films/:filmId', function (req, res) {

    let films = [
        {
            "id": 1,
            "name": "The Matrix: Resurrection"
        }, 
        {
            "id": 2,
            "name": "Thor Ragnarok"
        }, 
        {
            "id": 3,
            "name": "Dr. Strange: Madness in the multiverse"
        }, 
        {
            "id": 4,
            "name": "Spiderman: No Way Home"
        }
    ]

    let requestParams = req.params;
    let reqId = requestParams.filmId;
    // (reqId > films.length) ? res.send('>> No movie exists with this id \n check films : http://localhost:3000/films') : res.send(films[id-1]);

    for (let i=0; i<films.length; i++) {
        let element = films[i];
        if (element.id == reqId) { res.send(films[reqId-1]); }
    }
    res.send('>> No movie exists with this id \n check films : http://localhost:3000/films')
});


module.exports = router;