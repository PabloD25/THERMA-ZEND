// Donde se va a mostrar la imagen del carrusel
const contenedorImagen = document.getElementById('Imagen_Carrusel');

// Función para cambiar la imagen del carrusel
function cambiarImagen(rutaImagen) {
  // Limpia el contenido del contenedor antes de agregar una nueva imagen
  contenedorImagen.innerHTML = '';

  // Crea un nuevo elemento de imagen
  const imagen = document.createElement('img');

  // Establece el atributo 'src' con la nueva URL de la imagen
  imagen.src = rutaImagen;

  // Agrega la imagen al contenedor
  contenedorImagen.appendChild(imagen);
}

// btn_carrusel_1
const btn_Ca1 = document.getElementById('btn_carrusel_1');
btn_Ca1.addEventListener('click', function() {
  cambiarImagen('images/Imagen1.png'); // Cambia la imagen al hacer clic en el botón 1
});

// btn_carrusel_2
const btn_Ca2 = document.getElementById('btn_carrusel_2');
btn_Ca2.addEventListener('click', function() {
  cambiarImagen('images/Imagen2.png');// Cambia la imagen al hacer clic en el botón 2
});