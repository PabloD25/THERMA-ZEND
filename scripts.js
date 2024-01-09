const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;

// Datos de las imágenes y sus textos superpuestos
const imagenesConTextos = [
  {
    imagenSrc: 'images/Imagen1.png',
    imagenAlt: 'Descripción de la imagen 1',
    textos: ['Texto 1', 'Texto 2', 'Texto 3']
  },
  {
    imagenSrc: 'images/Imagen2.png',
    imagenAlt: 'Descripción de la imagen 2',
    textos: ['Texto A', 'Texto B', 'Texto C']
  },
  // Agrega más objetos para más imágenes
];

imagenesConTextos.forEach(imagenData => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  const image = document.createElement('img');
  image.src = imagenData.imagenSrc;
  image.alt = imagenData.imagenAlt;
  slide.appendChild(image);

  const table = document.createElement('table');
  table.classList.add('text-overlay-table');
  const row = document.createElement('tr');

  imagenData.textos.forEach((texto, index) => {
    const cell = document.createElement('td');
    const textOverlay = document.createElement('div');
    textOverlay.classList.add('text-overlay');
    textOverlay.setAttribute('data-slide', `${index}`);
    textOverlay.textContent = texto;
    cell.appendChild(textOverlay);
    row.appendChild(cell);
  });

  table.appendChild(row);
  slide.appendChild(table);
  slides.appendChild(slide);
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
}, 3000);
