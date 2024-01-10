document.addEventListener('DOMContentLoaded', function() {
  
  // Referencias
  const btnCarrusel = document.querySelectorAll('.btn_carrusel');
  const imagen_Uno = document.querySelector('#img_carrusel_1');
  const imagen_Dos = document.querySelector('#img_carrusel_2');
  const imagen_Tres = document.querySelector('#img_carrusel_3');
  
  // Funciones
  function moverImagen(cantidad) {
    // Obtenemos la posición actual de la imagen
    let posicionActual = parseInt(imagen.style.left) || 0;

    // Calculamos la nueva posición sumando la cantidad deseada
    let nuevaPosicion = posicionActual + cantidad;

    // Aplicamos la nueva posición a la imagen
    imagen.style.left = nuevaPosicion + 'px';
  }

  var imagen_actual = 0;

  btnCarrusel.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      if (index === 1) {
        imagen_Uno.style.animation = 'Entra_por_derecha 1s forwards';
      }
    });
  });

  
});