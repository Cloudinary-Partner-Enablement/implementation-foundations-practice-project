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
console.log(
  cloudinary.image("pe-transform-practice/cld-transform-ski", {
    transformation: [
      { width: 1500, crop: "pad", background: "gen_fill" },
      {
        color: "#232324",
        overlay: { font_family: "Arial", font_size: 75, text: "Coming Soon" },
      },
      { flags: "layer_apply", gravity: "north_west" },
    ],
  })
);

/// RETURNED VALUE: <img src='https://res.cloudinary.com/meganamendola/image/upload/b_gen_fill,c_pad,w_1500/co_rgb:232324,l_text:Arial_15:Coming%20Soon/fl_layer_apply,g_north_west/v1/pe-transform-practice/cld-transform-ski?_a=BAMHUyd60' />

////////////////////////////////////////////
// Video Transformation Challenge
console.log(
  cloudinary.video("pe-transform-practice/cld-transform-waterfall", {
    transformation: [
      { duration: "10.0" },
      { crop: "crop", width: 1080 },
      { effect: "loop:2" },
    ],
  })
);
