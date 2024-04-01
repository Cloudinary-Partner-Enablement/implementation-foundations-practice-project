# Cloudinary Partners - Implementation Foundations Practice Project

A small project to practice creating image and video transformations using Cloudinary.

## Prerequisites

1. A free Cloudinary account
2. Your Cloudinary URL from your dashboard and add your URL to `.env`
3. Upload the image and video by running `node start.js`
4. Review the documentation

   a. [Image Transformations](https://cloudinary.com/documentation/image_transformations)

   b. [Video Transformations](https://cloudinary.com/documentation/video_manipulation_and_delivery)

   c. [Generative AI](https://cloudinary.com/documentation/ai_in_action#generative_ai_transformations)

## Steps

### Image Transformation Challenge

Using the provided image you uploaded, complete the following transformations on the image:

1. **Text overlay + placement** - To the top left corner of the image, add a text overlay with the words "Coming Soon". The font should be Arial size 75 and any color besides white. Any additional settings (bold, italic, etc) can be completed as well.
2. **Crop & resize** - Adjust the width of the image to be 1500 using the padding crop mode.
3. **Gen Fill** - Fill in the additional background with our generative fill.

### Video Transformation Challenge

Using the provided video you uploaded, complete the following transformations on the video:

1. **Duration** - Set the duration of the video for 10 seconds
2. **Crop and resize** - Crop the video to a width of 1080
3. **Loop** - Loop the video 2 times
