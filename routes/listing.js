const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const listingController = require("../Controllers/listings.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const { findById } = require("../model/review.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage})

//index && create
router.route("/")
   .get(wrapAsync(listingController.index))
   .post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.createListing));
  
//new
router.get("/new",isLoggedIn,listingController.routerNewForm);

router.get("/random",isLoggedIn,wrapAsync(listingController.randomListing));

router.get("/search",isLoggedIn, wrapAsync(listingController.searchListing));

//show && update && delete
router.route("/:id")
   .get(wrapAsync(listingController.showListing))
   .put(isLoggedIn,validateListing,upload.single("listing[image]"),isOwner,wrapAsync(listingController.UpdateListing))
   .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


//edit
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEdit));





module.exports = router;
