const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")


// ========================= API's 25th August ==========================

// createProduct

const createProduct = async (req, res) => {
    let data = req.body
    const createdProduct = await productModel.create(data)
    res.send({ data: createdProduct })
}

// createUser
const createUser = async (req, res) => {

    let userData = req.body
    let freeAppUserData = req.headers['isfreeappuser']

    userData.isFreeAppUser = freeAppUserData
    const createdUser = await userModel.create(userData)

    // const updateUser = await userModel.findOneAndUpdate(
    //     { _id: createdUser._id },
    //     { $set: { isFreeAppUser: freeAppUserData } },
    //     { new: true }
    // )
    res.send({ data: createdUser })
}

// orderPurchase
const orderPurchase = async (req, res) => {

    let data = req.body
    let userId = data.userId
    let productId = data.productId

    const checkUser = await userModel.findById({_id: userId})                    //.select()    // {_id: userId}
    const checkProduct = await productModel.findById({_id: productId})           //.select()    // {_id: productId}

    if (!checkUser) res.send({ status: false, err: "userId not valid" })
    else if (!checkProduct) res.send({ status: false, err: "productId not valid" })
    else {
        let checkApp = req.headers.isfreeappuser
        if(checkApp == 'true') {
            data.amount = 0
            let savedData = await orderModel.create(data)
            res.send({data: savedData})
        }
        else if (checkUser.balance >= checkProduct.price) {
            const updateUserBalance = await userModel.findOneAndUpdate(
                { _id: userId },
                { $set: { balance: checkUser.balance - checkProduct.price } },
                { new: true }
            )
            data['amount'] = checkProduct.price
            data['isFreeAppUser'] = req.headers.isfreeappuser

            // console.log(updateUserBalance)
            const createdOrder = await orderModel.create(data)
            res.send({data: createdOrder})
        }
        else {
            res.send({status: false, msg: "Insufficient Balance"})
        }
    }

}

module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.orderPurchase = orderPurchase
