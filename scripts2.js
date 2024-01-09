const imagenContainer = document.querySelector('.imagen-container');

// Ruta de la imagen que quieres mostrar al iniciar
const imagenSrc = 'images/Imagen1.png'; // Reemplaza con la ruta de tu imagen

// Crea un elemento de imagen
const imagen = document.createElement('img');
imagen.src = imagenSrc;
imagen.alt = 'Descripción de la imagen'; // Agrega una descripción adecuada

// Agrega la imagen al contenedor
imagenContainer.appendChild(imagen);
