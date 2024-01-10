// Codigo que se ejecuta soloc cuando ya termino de cargar el HTML
document.addEventListener('DOMContentLoaded', function() {
  // Obtener la referencia de la imagen dentro del contenedor
  const slide = document.querySelector('#Imagen_Carrusel img');

  // Función para cambiar la imagen del carrusel
  function cambiarImagen(rutaImagen) {
    // Cambiar el atributo 'src' de la imagen
    slide.src = rutaImagen;
  }

  // Al cargar la pagina
  document.addEventListener('DOMContentLoaded', function() {
    // Imagen 1 se pone por defecto
    cambiarImagen('images/Imagen1.png');
  });

  // btn_carrusel_1
  const btn_Ca1 = document.getElementById('btn_carrusel_1');
  btn_Ca1.addEventListener('click', function() {
    cambiarImagen('images/Imagen1.png');
  });

  // btn_carrusel_2
  const btn_Ca2 = document.getElementById('btn_carrusel_2');
  btn_Ca2.addEventListener('click', function() {
    cambiarImagen('images/Imagen2.png');
  });

  // btn_carrusel_3
  const btn_Ca3 = document.getElementById('btn_carrusel_3');
  btn_Ca3.addEventListener('click', function() {
    cambiarImagen('images/Imagen3.png');
  });
});