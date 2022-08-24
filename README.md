

<!-- TYPES OF MIDDLEWARES -->
# Route based MW
# Global MW


<!-- why MIDDLEWARES -->
- manages the flow of control
- code reusability esp for restricted routes


<!-- WHAT -->
- sit between your router and your middleware

<!-- e.g -->

router.post('/getHomePage', MiddlewareIfLoggedin, userController.homePage)


function MiddlewareIfLoggedin ( req, res, next ) {
    if loggedIn then call the next function/handler which will give us the home page
    else res.send (" plz login or register ")
}


<!--  restricted and open-to-all api's can be handled like below -->
# Restricted API's
 router.get("/Homepage" , Middleware.mid1, UserController.feeds)
 router.get("/profileDetails" , Middleware.mid1, UserController.profile)
 router.get("/changePassword" , Middleware.mid1, UserController.changePassword)
 # Open - to - all API'
 router.get("/termsAndConditions" , UserController.termsAndConditions)



<!-- GLOBAL MW -->

app.use(midGlobal)

# body-parser functions:
- getting the post data in req.body
- getting the req.body data as JSON
- providing the header data in req.header
etc etc



// ===================

we can send data as input from postman with header type also like body


//=====================






