const name = "Soumyadeep Chakraborty"

let welcome = function () {
    console.log(">> ==== Welcome to my application. ====\n>> I am " + name + " and a part of FunctionUp Plutonium cohort");
}

module.exports.myName = name;
module.exports.greetings = welcome;