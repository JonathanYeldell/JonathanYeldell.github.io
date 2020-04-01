const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const image_array = ["images/pic1.png","images/pic2.png","images/pic3.png","images/pic4.png","images/pic5.png"]

/* Looping through images */

var displayed_image = document.getElementsByClassName("displayed-img");


console.log(image_array);
console.log(displayed_image);

  for (i = 0; i < image_array.length; i++) {
      displayed_image.src = image_array[i];
      }

// console.log(slides);


// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
