const axios = require('axios')


//===================== Assignment 2 - promises & axios request - sep 1st =========================

const getTemp = async (req, res) => {
    try {
        // http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>
        // let city = req.query.q
        // let appId = req.query.appid
        // let options = {
        //     method: 'get',
        //     url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
        // }
        // let result = await axios(options)
        // let data= result.data
        // let temp = data['main']['temp']
        
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = []
        for (let i in cities) {
            let city = cities[i]
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=161e78a7c90a41a5b0b7ff77f158a9e0`
            }
            let result = await axios(options)
            let data = result.data
            let tempKelvin = data['main']['temp']
            let tempCelcius = Math.round(tempKelvin - 273.15)
            arr.push({city: city, tempKelvin: tempKelvin, tempCelcius: tempCelcius})
        }
        arr.sort((a, b) => a.tempKelvin - b.tempKelvin)

        // res.status(200).send({ status: true, place: city, temp: temp })
        res.status(200).send({status: true, data: arr})
    } catch (err) {
        res.status(500).send({status: 'ERROR', error: err.message})
    }
}

module.exports = { getTemp }