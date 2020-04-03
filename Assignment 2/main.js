const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const image_array = ["images/pic1.png","images/pic2.png","images/pic3.png","images/pic4.png","images/pic5.png"]

/* Looping through images */

var displayed_image = document.getElementsByClassName("displayed-img");

for(let i = 0; i < image_array.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image_array[i]);
  newImage.setAttribute('class', 'thumb-img')
  thumbBar.appendChild(newImage);

  newImage.onclick = function() {
    displayedImage.src = image_array[i];
  }
}  

/* Wiring up the Darken/Lighten button */
function darken() {
  //console.log('FUNCTION TEST: ', btn.innerHTML);
  if(btn.innerHTML === 'Darken') {
    btn.innerHTML = 'Lighten';
    btn.setAttribute('class', 'light');
    overlay.style['background-color'] = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.innerHTML = 'Darken';
    btn.setAttribute('class', 'dark');
    overlay.style['background-color'] = 'rgba(0, 0, 0, 0)';
  }
}