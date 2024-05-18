const slider = document.getElementById("slider");
const images = slider.querySelectorAll("img");
let currentImage = 0;

function changeImage() {
  images[currentImage].classList.remove("active"); // Deactivate current image
  currentImage = (currentImage + 1) % images.length; // Get next image index
  images[currentImage].classList.add("active"); // Activate next image
  setTimeout(changeImage, 3000);
}

changeImage();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");

hiddenElement.forEach((el) => observer.observe(el));
