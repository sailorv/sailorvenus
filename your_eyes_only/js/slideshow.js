var slideshowWrapper = document.getElementById('slideshow');

if (slideshowWrapper) {
  var slides = slideshowWrapper.querySelectorAll('img');
  const newWindow = document.getElementById('new_window');
  const pinterestButton = document.getElementById('pinterest_link');
  const siteLink = 'https://www.sailorven.us';
  const siteDesc = 'your_eyes_only.exe';

  if (slides.length > 1) {
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
      const imageLink = slides[slideIndex - 1].getAttribute('src');
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].setAttribute('aria-hidden', 'true');
      }

      if (newWindow) {
        newWindow.setAttribute('href',imageLink);
      }

      if (pinterestButton) {
        const imageURL = slides[slideIndex - 1].src;
        const pinterestLink = `https://www.pinterest.com/pin/create/button/?url=${siteLink}&media=${imageURL}&description=${siteDesc}`;
        pinterestButton.setAttribute('href',pinterestLink);
      }

      slides[slideIndex - 1].setAttribute('aria-hidden', 'false');
    }
  }

  // Pinterest button
  // 

  // For automatic advance
  // setInterval(() => {
  //   nextSlide();
  // }, 5000);
}
