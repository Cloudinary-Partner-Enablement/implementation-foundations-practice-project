// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Image Transformation Challenge
console.log(cloudinary.image("pe-transform-practice/cld-transform-ski", {}));

////////////////////////////////////////////
// Video Transformation Challenge
console.log(
  cloudinary.video("pe-transform-practice/cld-transform-waterfall", {})
);
