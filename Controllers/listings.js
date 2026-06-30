const Listing = require("../model/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const TOKEN = process.env.MAP_ACCESS_TOKEN;
// const geocodingClient = mbxGeocoding({ accessToken: TOKEN });

module.exports.index = async(req,res)=>{
    const allListing = await Listing.find({})
    res.render("listings/index.ejs",{allListing});
    
};

module.exports.routerNewForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("owner")
    .populate({
        path:"reviews",
        populate:{
        path:"author",
    },
    }).populate("owner");
    if(! listing){
       req.flash("error","Listing doesn't exist!"); 
       return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing}
        
    );  
};

module.exports.randomListing = async(req,res)=>{
    try{
     const listings = await Listing.find();
    if (listings.length === 0) {
        req.flash("error", "No listings found");
        return res.redirect("/listings");
    }
    const randomIndex = Math.floor(Math.random() * listings.length);
    const randomIndex2 = Math.floor(Math.random() * listings.length);
    const randomIndex3 = Math.floor(Math.random() * listings.length);
    const randomIndex4 = Math.floor(Math.random() * listings.length);
    const randomIndex5 = Math.floor(Math.random() * listings.length);
    const allListing = [listings[randomIndex],listings[randomIndex2],listings[randomIndex3],listings[randomIndex4],listings[randomIndex5]];
    res.render("search.ejs", { allListing });
 }catch(e){
    req.flash("error","Something wrong");
    res.redirect("/listings");
 }
};

module.exports.searchListing = async (req, res) => {
           let {location} = req.query;
          console.log(location);
           if(!location || !location.trim()){
            req.flash("error","Please search a correct location");
            return res.redirect("/listings");
           }
            const allListing = await Listing.find({
            location: { $regex: location, $options: "i" }
        });
        console.log(allListing);
        res.render("search.ejs", { allListing });
        };

module.exports.createListing = async(req,res,next)=>{
    //  let responseListing = await geocodingClient.forwardGeocode({
    //  query: 'req.body.listing.location',
    //  limit: 1,
    //  })
    // .send();

    // if(!responseListing.body.features.length){
    //     req.flash("error","location is not find");
    //     return res.redirect("/listings/new");
    // }

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; 
    newListing.image = {url,filename};
    // newListing.geometry = responseListing.body.features[0].geometry;
    let saveListing = await newListing.save();
    console.log(saveListing);
      req.flash("success","New Listings Created!");
      res.redirect("/listings");
    
};

module.exports.renderEdit = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(! listing){
       req.flash("error","Listing doesn't exist!"); 
       return res.redirect("/listings");
    }
       let orginalImageUrl = listing.image.url;
       orginalImageUrl = orginalImageUrl.replace("/upload","/upload/h_150,w_250")
    res.render("listings/edit.ejs",{listing,orginalImageUrl});

};

module.exports.UpdateListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    
    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }
    req.flash("success","listing Updated!"); 
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listings Deleted!");
    res.redirect("/listings");
};
