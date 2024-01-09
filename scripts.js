const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;

// Datos de los textos superpuestos
const textosPorImagen = [
  ['Texto 1', 'Texto 2'], // Textos para la primera imagen
  ['Texto 1', 'Texto 2']  // Textos para la segunda imagen y así sucesivamente
  // Agrega más arrays para más imágenes
];

textosPorImagen.forEach(textos => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  const image = document.createElement('img');
  image.src = 'images/Imagen1.png'; // Reemplaza 'ruta_a_tu_imagen.jpg' por la ruta correspondiente
  image.alt = 'Descripción de la imagen'; // Agrega una descripción adecuada
  slide.appendChild(image);

  const table = document.createElement('table');
  table.classList.add('text-overlay-table');
  const row = document.createElement('tr');

  textos.forEach((texto, index) => {
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
}, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
