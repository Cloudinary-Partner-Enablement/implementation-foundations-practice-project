// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// UPLOAD PRACTICE PROJECT ASSETS
// FREE ASSETS FROM PIXABAY
////////////////////////////////////////////

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg",
    { public_id: "cld-transform-ski", folder: "pe-transform-practice" }
  )
  .then((result) => console.log(result));

cloudinary.uploader.upload_large(
  "https://res.cloudinary.com/meganamendola/video/upload/v1711481342/waterfall_practice.mp4",
  {
    public_id: "cld-transform-waterfall",
    folder: "pe-transform-practice",
    resource_type: "video",
  },
  function (error, result) {
    console.log(result, error);
  }
);
