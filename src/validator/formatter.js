
const name = require('../logger/logger')


const s1 = '                 >> FunctionUp teaching us to achieve a goal                    ';

const s2 = '>>  THERE IS ONLY ONE WAY  ->'
const s3 = ">> " +name.myName + '...Push Yourself to get there...';

const stringTrim = () => { console.log(s1.trim())};

const stringToLowerCase = () => { console.log(s2.toLowerCase()) };

const stringToUpperCase = () => { console.log(s3.toUpperCase()) };


module.exports.trim = stringTrim;
module.exports.toLowerCase = stringToLowerCase;
module.exports.toUpperCase = stringToUpperCase;

