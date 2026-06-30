const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../Controllers/user.js");

//signup
router.route("/signup")
    .get(userController.renderSignup)
    .post(wrapAsync(userController.signupForm));


//login 
router.route("/login")
    .get(userController.renderLogin)
    .post(
    saveRedirectUrl,
    passport.authenticate("local",
    {failureRedirect:"/login",
    failureFlash:true
    }),
    userController.loginForm
    );

//logout
router.get("/logout",userController.logOut);

module.exports = router;
