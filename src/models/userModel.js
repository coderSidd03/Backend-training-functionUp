const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String, // String is shorthand for {type: String}
    mobile: {
        type: String ,
        unique: true ,      // it means every inputed value should be unique
        required: true      // it means this field is required
        //in this way we declare multiple properties inside one schema
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]  //enum means it can take multiple values mentioning values inside [..]
    },
    age: Number,

    isIndian: Boolean,      // it needs input yes or no
    
    // to save object
    parentsInfo : {
        motherName: String,
        fatherName: String,
        siblingName: String
    },

    //array
    cars: [ String ]            // array of strings


}, {timestamps: true});
//timestamps will tell in future that when a data cretaed

// data should be in
// string, number, boolean, 


module.exports = mongoose.model('user', userSchema)
// we are created a model and exporting
// this model will do interact with database



/*
example of how to input createuser data inside body
{
    "firstName": "testing data", 
    "lastName": "...",
    "mobile": "12334457",
    "isIndian" : true,
    "parentsInfo" : {
        "motherName" : "it is a string",
        "fatherName" : "it is alsi string"
    },

    "cars": ["BMW", "Buggati", "mercedez"]
}
*/