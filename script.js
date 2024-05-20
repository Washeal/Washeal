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
const nav_links = document.querySelector(".nav-mob-link");
const close_nav = document.getElementById("close-nav");

nav.addEventListener("click", function () {
  mob_nav.classList.add("mob-nav-show");
  // mob_nav.classList.remove("mob-nav");
  document.body.style.overflow = "hidden";
});

close_nav.addEventListener("click", function () {
  mob_nav.classList.remove("mob-nav-show");
  // mob_nav.classList.add("mob-nav");
  document.body.style.overflow = "";
});

nav_links.addEventListener("click", function () {
  mob_nav.classList.remove("mob-nav-show");

  document.body.style.overflow = "";
});

let btn = document.getElementById("theme");
let btn_mob = document.getElementById("theme-mob");

btn.addEventListener("click", function () {
  const body = document.body;
  btn.style.transform = btn.style.transform ? "" : "rotate(180deg)";
  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
    btn.style.color = "white";
    console.log("dark");
  } else {
    body.setAttribute("data-theme", "light");
    btn.style.color = "black";
    console.log("light");
  }
});

btn_mob.addEventListener("click", function () {
  const body = document.body;
  btn_mob.style.transform = btn_mob.style.transform ? "" : "rotate(180deg)";
  if (body.getAttribute("data-theme") === "light") {
    body.setAttribute("data-theme", "dark");
    btn_mob.style.color = "white";
    console.log("dark");
  } else {
    body.setAttribute("data-theme", "light");
    btn_mob.style.color = "black";
    console.log("light");
  }
});
