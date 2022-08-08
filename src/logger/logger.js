const name = "Soumyadeep Chakraborty"

let welcome =  () => {
    console.log(">> ==== Welcome to my application. ====\n>> I am " + name + " and a part of FunctionUp Plutonium cohort");
}

module.exports.myName = name;
module.exports.greetings = welcome;
// module.export.<public_Name> = <function_name> / <variable_Name>