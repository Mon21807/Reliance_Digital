const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); 
