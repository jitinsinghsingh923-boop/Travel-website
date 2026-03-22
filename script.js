document.addEventListener("DOMContentLoaded", () => {

  // MENU
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // VIDEO SLIDER
  const videos = document.querySelectorAll("#video-container video");
  let current = 0;

  if (videos.length > 0) {

    // ensure first video visible
    videos[0].classList.add("active");

    setInterval(() => {
      videos[current].classList.remove("active");
      current = (current + 1) % videos.length;
      videos[current].classList.add("active");
    }, 6000);

  }

});
