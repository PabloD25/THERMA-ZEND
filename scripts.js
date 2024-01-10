document.addEventListener('DOMContentLoaded', function() {
  
  // Referencias
  const btnCarrusel = document.querySelectorAll('.btn_carrusel');
  const tablaCarrusel = document.querySelector('.Tabla_Img_Carrusel');

  
  // Funciones
  function moverItem(item, direccion, cantidad) {
    const movimiento = direccion === 'izquierda' ? `translateX(-${cantidad}%)` : `translateX(${cantidad}%)`;
    item.classList.add('Transicion');
    item.style.transform = movimiento;
  }

  var imagen_actual = 0;

  btnCarrusel.forEach((btn, index) => {
    btn.addEventListener('click', function() {

      const cantidadMovimiento = index > imagen_actual ? (index - imagen_actual) * 100 : (imagen_actual - index) * 100;

      if (imagen_actual !== index) {
        moverItem(tablaCarrusel, index > imagen_actual ? 'izquierda' : 'derecha', cantidadMovimiento);
        imagen_actual = index;
      }

    });
  });

});