var slideshowWrapper = document.getElementById('slideshow');
var slides = slideshowWrapper.querySelectorAll('img');

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].setAttribute('aria-hidden', 'true');
  }

  slides[slideIndex - 1].setAttribute('aria-hidden', 'false');
}

// setInterval(() => {
//   nextSlide();
// }, 5000);