document.addEventListener('DOMContentLoaded', function() {
  
  /* Carrusel */

  // Referencias
  const btnCarrusel = document.querySelectorAll('.btn_carrusel');
  const containerCarrusel = document.querySelector('.Container_img_Carrusel');
  
  // Funciones
  function moverItem(item, direccion, cantidad) {
    const movimiento = direccion === 'izquierda' ? `translateX(-${cantidad}%)` : `translateX(-${cantidad}%)`;
    item.classList.add('Transicion');
    item.style.transform = movimiento;
  }

  var imagen_actual = 0;

  btnCarrusel.forEach((btn, index_C1) => {
    btn.addEventListener('click', function() {

      const cantidadMovimiento = index_C1 > imagen_actual ?
      ((index_C1 - imagen_actual) * 25) + (imagen_actual * 25) : 
      (imagen_actual * 25) - ((imagen_actual - index_C1) * 25);
      
      if (imagen_actual !== index_C1) {
        moverItem(containerCarrusel, index_C1 > imagen_actual ? 'izquierda' : 'derecha', cantidadMovimiento);
        imagen_actual = index_C1;
      }

    }); 
  });

  /* Carrusel_2 */

  // Variables
  let index_C2 = 0;
  
  //Referencias
  const carrusel_2 = document.querySelector('.Container_img_Carrusel_2');
  const imagenes_carrusel_2 = document.querySelectorAll('.img_carrusel_2');
  const btnSiguiente = document.querySelectorAll('.btn_Siguiente_Carrusel_2');
  const btnAnterior = document.querySelectorAll('.btn_Anterior_Carrusel_2');


  function cambiarImagen(direction) {
    index_C2 += direction;
    if (index_C2 < 0) {
        index_C2 = imagenes_carrusel_2.length - 5; // Muestra 5 imágenes a la vez
    } else if (index_C2 > imagenes_carrusel_2.length - 5) {
        index_C2 = 0;
    }
    actualizarCarrusel();
  }

  function actualizarCarrusel() {
    const translateValue = -index_C2 * 20 + '%'; // 20% porque estamos mostrando 5 imágenes a la vez
    carrusel_2.style.transform = 'translateX(' + translateValue + ')';
  }

  btnSiguiente.forEach((btn) => {
    btn.addEventListener('click', function() {
      console.log('Adelante');
      cambiarImagen(1)

    });
  });
  btnAnterior.forEach((btn) => {
    btn.addEventListener('click', function() {
      cambiarImagen(-1)
    });
  });
});