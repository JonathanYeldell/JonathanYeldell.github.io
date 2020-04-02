const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const image_array = ["images/pic1.png","images/pic2.png","images/pic3.png","images/pic4.png","images/pic5.png"]

/* Looping through images */

// console.log(image_array);
// console.log(displayed_image);

var displayed_image = document.getElementsByClassName("displayed-img");

  for (i = 0; i < image_array.length; i++) {
      displayed_image['src'] = image_array[i];
      }


// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
function darken() {
  //console.log('FUNCTION TEST: ', btn.innerHTML);
  if(btn.innerHTML === 'Darken') {
    btn.innerHTML = 'Lighten';
    btn.setAttribute('class', 'light');
    overlay.setAttribute('background-color', 'rgba(0, 0, 0, 0.5)');
  } else {
    btn.innerHTML = 'Darken';
    btn.setAttribute('class', 'dark');
    overlay.setAttribute('background-color', 'rgba(0, 0, 0, 0)');
  }
}