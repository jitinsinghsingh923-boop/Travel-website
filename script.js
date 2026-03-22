const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Video slider
const videos = document.querySelectorAll("#video-container video");
let current = 0;

setInterval(() => {
  videos[current].classList.remove("active");
  current = (current + 1) % videos.length;
  videos[current].classList.add("active");
}, 6000);
