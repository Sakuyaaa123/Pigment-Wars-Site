// === Carousel Script ===
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let counter = 0;

function updateCarousel() {
  const size = images[0].clientWidth;
  slide.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {
  if (counter >= images.length - 1) counter = -1;
  counter++;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) counter = images.length;
  counter--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);

// === Slow Down gameTrailer Video ===
const gameTrailer = document.getElementById('gameTrailer');
if (gameTrailer) {
  gameTrailer.playbackRate = 0.7;
}

// === Intersection Observer for Sections ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// === Custom Play Button for Preview Video ===
  //const video = document.getElementById("previewVideo");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const overlay = document.getElementById("videoOverlay");
  const wrapper = document.querySelector(".video-wrapper");

  let pauseTimeout;

  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
    overlay.style.opacity = 0;
    pauseBtn.style.display = "none";
  });

  wrapper.addEventListener("mousemove", () => {
    if (!video.paused) {
      pauseBtn.style.display = "flex";
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        pauseBtn.style.display = "none";
      }, 2000);
    }
  });

  pauseBtn.addEventListener("click", () => {
    video.pause();
    pauseBtn.style.display = "none";
    overlay.style.opacity = 1;
    playBtn.style.display = "flex";
  });

// === Menu Toggle === //
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
