const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
const textOverlays = document.querySelectorAll('.text-overlay');

textOverlays.forEach(text => {
  text.addEventListener('click', () => {
    const slideIndex = parseInt(text.getAttribute('data-slide'));
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
  });
});

let counter = 0;

setInterval(() => {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;

  if (counter === slides.children.length) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = 'translateX(0)';
      counter = 0;
    }, 500);
  }
}, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
