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


// easy approach :
// router.post('/players', (req, res) => {

//     let name = req.body.name;
//     for (var i in players) {
//         let player = players[i];
//         if (name == player.name) {
//             res.send(">> Player is already existed")
//             break;
//         }
//     }
//     players.push(req.body)
//     res.send(players)
// });



// higher order function approach
router.post('/players', (req, res) => {

    let name = req.body.name;
    let player = players.find((element) => element.name == name)
    
    if (player) {
        res.send(">> Player is already existed")
    } else {
        players.push(req.body)
        res.send(players);
    }
});



module.exports = router;