
//1.  Functionality planning (what do we want it to do?) - Hardest part
// - display 3 random images based on a set of images the customer gives you
// - images cannot show up twice in a row on successive clicks 
// - the set of 3 images cannot repeat - cannot show up on same screen
// - when an image is clicked on, another set of 3 random images are displayed
// - have the computer track the number of total clicks
// - max clicks === 25
// - have the computer track how many times each image was clicked 
// - percentage of time the image was clicked over any other image
// - view the total results in some kind of graph at the end
// - view the total results as a table of numbers

// - more questions - do we want to track number of times the image is displayed?

//2.  Pseudocode (How do we want it to do what it should do?) - second hardest part

// A. Image Display Requirement
// research might be needed here.
// user has to click and page has to respond 
// do i know how to generate a random number? 
// how do we generate random images from a set of images
// likely, will have an array of image names and I will need to randomly select 3 images from the array

// B. Results - Total and Graph

//3.  Actual Code (What code do we write) - this is the easy part

// B. Image Display Code
// - click on image
// - image responds - console log 'image 1 was clicked', or 'image 2 was clicked' or 'image 3 was clicked')
// - Put a listener on each 'div'- click
// - Callback function will respond to the click


// We need some way of holding all the images in memory (or at least the locations of them)
// We need an array of images... 
// - array will have path to the image (url to image)
// - array will also have total number of clicks (votes)
// - array will also track total times an image is viewed 
// - array will need the image HTMLid - example - bag, banana, boots, etc...

// What kind of array will keep track of the above?

// How do I create an array?

