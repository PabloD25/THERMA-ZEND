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