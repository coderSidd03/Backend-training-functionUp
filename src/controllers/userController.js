const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  // taking the credentials for login
  let emailId = req.body.emailId;
  let password = req.body.password;

  // checking that the user is valid or not
  let user = await userModel.findOne({ emailId: emailId, password: password });
  if (!user) return res.send({ status: false, msg: "username or the password is not corerct" });

  // creating jsonWebToken
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "plutonium--secret-token--created: soumyadeep chakraborty--"
  );
  // setting headers and sending response
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  // taking the value req.userDetails from middleware auth.js 
  let userDetails = req.userDetails
  // sending happy response
  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {

  // taking the value req.requestingUserId from middleware auth.js 
  let requestingUserId = req.requestingUserId;
  // taking data from body and doing a query in userModel and updating the whatever collected from body
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: requestingUserId }, userData, { new: true });

  res.send({ status: updatedUser, data: updatedUser });
};

const deleteUser = async (req, res) => {
  // taking the value req.requestingUserId from middleware auth.js 
  let requestingUserId = req.requestingUserId;
  // cahnging that particular user's isDeleted field to true
  let deletedUser = await userModel.findOneAndUpdate(
    { _id: requestingUserId },
    { isDeleted: true },
    { new: true }
  )
  res.send({ status: true, data: deletedUser })
}

const postMessage = async function (req, res) {
  let message = req.body.message
  
  // taking the value req.requestingUserId from middleware auth.js 
  let requestingUserId = req.requestingUserId;

  // taking the req.userDetails from middleware auth.js
  let user = req.userDetails

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: requestingUserId }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}


module.exports = { createUser, getUserData, updateUser, loginUser, postMessage, deleteUser }
