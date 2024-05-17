const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
let currentImage = 0;

function changeImage() {
  images[currentImage].classList.remove('active');  // Deactivate current image
  currentImage = (currentImage + 1) % images.length; // Get next image index
  images[currentImage].classList.add('active');    // Activate next image
  setTimeout(changeImage, 3000); // Call changeImage again after 3 seconds
}

changeImage(); // Start the image transition
