const user = require("../model/user.js");

module.exports.renderSignup = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signupForm = async(req,res)=>{
    try{
    let {username,email,password} = req.body;
   const newUser = new user({username,email});
   const registereduser = await user.register(newUser,password);

   req.login(registereduser,(err)=>{
    if(err){
        return next(err);
    }
    req.flash("success","Welcome to wanderlust");
    res.redirect("/listings");
   })
   
   } catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
   }  
};

module.exports.renderLogin = (req,res)=>{
    res.render("users/login.ejs");
};

module.exports.loginForm = async(req,res)=>{
    req.flash("success","Welcome back to the wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logOut = (req,res,next)=>{
    req.logOut((err)=>{
        if(err){
           next(err);
        }
        req.flash("success","You are successfully logged out!");
        res.redirect("/listings");
    })
}