<<<<<<< HEAD
if(process.env.NODE_ENV != "production"){
   require('dotenv').config();
}
    
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/user.js");

const dburl = process.env.ALTASDB;


main().then(()=>{
    console.log("connect to db");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(dburl);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const store =  MongoStore.create({
     mongoUrl: dburl,
     crypto: {
        secret: process.env.SECRET,
     },
     touchAfter: 24 * 3600,
     
});

const sessionsOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge : 1000 * 60 * 60 * 24 * 3,
        httpOnly : true,
    }
};


store.on("error",() =>{
    console.log("ERROR IN MONGO STORE",err);
});


app.use(session(sessionsOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.curUser = req.user;
    next();
});



app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

// app.get("/testListing", async (req,res)=>{
//     let sampleListing = new Listing({
//         title : " My New Villa",
//         description : "By the beach",
//         image : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%3D",
//         price: 1200,
//         location:"nagpur,Maharasthra",
//         country:"India"
//     });

//      await sampleListing.save();
//      console.log("sample was saved");
//      res.send("sucessful");
// });

app.use((req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});


app.use((err,req,res,next) => {
    let {status=404,message="page not found"}=err;
     res.status(status).render("error.ejs",{message});
    // res.status(status).send(message);  
    
});

app.listen(8080,()=>{
    console.log("app is listening at port 8080");
});
=======
//add a feature
>>>>>>> 5787948d427ee4a0643d5b1d6fdf70e2ece35f4f
