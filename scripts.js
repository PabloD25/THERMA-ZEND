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
  // Imagenes
  const diccionario_Clientes = {
    0: '<img src="images/imagen1.png" alt="Cliente 1">',
    1: '<img src="images/imagen2.png" alt="Cliente 2">',
    2: '<img src="images/imagen3.png" alt="Cliente 3">',
    3: '<img src="images/imagen4.png" alt="Cliente 4">',
    4: '<img src="images/imagen5.png" alt="Cliente 5">',
    5: '<img src="images/imagen6.png" alt="Cliente 6">',
    6: '<img src="images/imagen7.png" alt="Cliente 7">',
    7: '<img src="images/imagen8.png" alt="Cliente 8">',
    8: '<img src="images/imagen9.png" alt="Cliente 9">',
    9: '<img src="images/imagen10.png" alt="Cliente 10">'
  };

  // Referencias
  const btnSiguiente = document.getElementById('btn_Siguiente_Carrusel_2');
  const btnAnterior = document.getElementById('btn_Anterior_Carrusel_2');
  const celdaConImagen = document.getElementById('');
  const celdaConImagen = document.getElementById('celdaConImagen');
  const celdaConImagen = document.getElementById('celdaConImagen');
  const celdaConImagen = document.getElementById('celdaConImagen');
  const celdaConImagen = document.getElementById('celdaConImagen');





});