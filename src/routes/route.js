const express = require('express');

const router = express.Router();

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]




router.post('/players', (req, res) => {

    let name = req.body.name;

    for (var i in players) {
        let player = players[i];
        if (name == player.name) {
            res.send(">> Player is already existed")
        }
    }

    players.push(req.body)
    res.send('>> player added')
    console.log(players)
});







module.exports = router;