'use strict'



// The following code lines 10-19 can be generalized 
img1.addEventListener('click', runFunctionImage1); // explicitly define the function to call
img2.addEventListener('click', function(){ // call an anonymous function
  console.log('I am in img2');
})
img3.addEventListener('click', function(){
  console.log('I am in img3');
})
function runFunctionImage1() {
    console.log('I am in img1')
}

// This is the mini-database to keep track of everything. 
let PRODUCTS_ARRAY = [
  {HTMLid: 'bag', imgURL: './images/bag.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'banana', imgURL: './images/banana.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'bathroom', imgURL: './images/bathroom.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'boots', imgURL: './images/boots.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'breakfast', imgURL: './images/breakfast.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'bubblegum', imgURL: './images/bubblegum.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'chair', imgURL: './images/chair.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'cthulhu', imgURL: './images/cthulhu.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'dogDuck', imgURL: './images/dog-duck.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'dragon', imgURL: './images/dragon.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'pen', imgURL: './images/pen.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'petSweep', imgURL: './images/pet-sweep.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'scissors', imgURL: './images/scissors.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'shark', imgURL: './images/shark.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'sweep', imgURL: './images/sweep.png', totalViews: 0, totalVotes: 0},
  {HTMLid: 'tauntaun', imgURL: './images/tauntaun.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'unicorn', imgURL: './images/unicorn.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'usb', imgURL: './images/usb.gif', totalViews: 0, totalVotes: 0},
  {HTMLid: 'waterCan', imgURL: './images/water-can.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'wineGlass', imgURL: './images/wine-glass.jpg', totalViews: 0, totalVotes: 0},
]

// On startup - display 3 images from the array
function renderImages() {
  // this funtion will render 3 images from the array
  // go grab the html item to attach the 3 images to
  // 1. get the element from html that we want to attach the image to (getElementById, or querySelector)
  // 2. create an image element (createElement)
  // 3. set the src property of the img element to the imgURL property of the item
  // 4. append the newly created img to the div element (appendChild)

  // let img1Container = document.getElementById('img1Container');
  // let img2Container = document.getElementById('img2Container');
  // let img3Container = document.getElementById('img3Container');

  for (let i=0; i <= 2; i++) {
    // let imgContainer = document.getElementById('img' + i + 'Container');
    let imgContainer = document.getElementById(`img${i}Container`);
    let img = document.createElement('img');
    img.setAttribute('src', PRODUCTS_ARRAY[i].imgURL);

  }


}

// Consolidate all the response functions (callbacks) into one function
function handleClick() {
  // put all the callbacks into one place
}

