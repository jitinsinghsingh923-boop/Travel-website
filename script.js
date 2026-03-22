window.onload = function () {

  // MENU TOGGLE
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

  // safety check
  if (videos.length === 0) return;

  // ensure only first video active
  videos.forEach((video, i) => {
    video.classList.remove("active");
    if (i === 0) video.classList.add("active");
  });

  setInterval(() => {
    videos[current].classList.remove("active");
    current = (current + 1) % videos.length;
    videos[current].classList.add("active");
  }, 4000);

};
