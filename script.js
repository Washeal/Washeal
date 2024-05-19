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

// Animations

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

// Mobile Navbar
const nav = document.getElementById("nav");
const mob_nav = document.getElementsByClassName("mob-nav")[0]; // Access the first element
const close_nav = document.getElementById("close-nav");

nav.addEventListener("click", function () {
  mob_nav.classList.add("mob-nav-show");
  mob_nav.classList.remove("mob-nav");
  document.body.style.overflow = "hidden";
});

close_nav.addEventListener("click", function () {
  mob_nav.classList.remove("mob-nav-show");
  mob_nav.classList.add("mob-nav");
  document.body.style.overflow = "";
});
