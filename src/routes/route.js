const { query } = require('express');
const express = require('express');

const router = express.Router();




// ASSIGNMENT :- 1 <post-api> <player-data>

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": ["swimming"]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": ["soccer"],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": ["soccer"],
        },
    ]

router.post('/players', (req, res) => {

    let name = req.body.name;
    let player = players.find((element) => element.name == name)

    (player) ? res.send(">> Player is already existed") 
    :
    players.push(req.body)
    res.send(players);
    
});



//problem : 2 <votingAge filter problem>

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post('/persons', (req, res) => {
    let votingAge = req.query.age;
    let ageResult = persons.filter((elem) => elem.age > votingAge)
    for (let i in ageResult) { ageResult[i].votingStatus = true; }
    res.send(ageResult)
})

























module.exports = router;
