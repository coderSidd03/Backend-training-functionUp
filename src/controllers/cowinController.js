const axios = require('axios')

// co win api production link (// api setu)
// https://cdn-api.co-vin.in/api 


//===================== Assignment 1 promises - axios request - sep 1st =========================

let vaccinationSessionByDistrict = async (req, res) => {
    try {
        let id = req.query.district_id
        let date = req.query.date
        
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }

        let result = await axios( options )
        let data= result.data

        res.status(200).send({status: true, data: data})
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}



module.exports = { getStates, getDistricts, getByPinCode, getOtp, vaccinationSessionByDistrict }