import "./home-style.css";

document.addEventListener("DOMContentLoaded", function (event) {
  const images = document.querySelectorAll(".intro-slideshow img");
  const nextImageDelay = 8000;
  let currentImageCounter = 0;

  images[currentImageCounter].style.opacity = 1;
  setInterval(nextImage, nextImageDelay);

  function nextImage() {
    images[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % images.length;
    images[currentImageCounter].style.opacity = 1;
  }
});