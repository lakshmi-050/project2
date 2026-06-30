const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {validateReview,isLoggedIn,isReviewOwner} = require("../middleware.js");
const reviewController = require("../Controllers/review.js");


//reviews
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.creatingReview));

//delete review
router.delete("/:reviewId",isLoggedIn,isReviewOwner,wrapAsync(reviewController.destroyReview));

module.exports = router;