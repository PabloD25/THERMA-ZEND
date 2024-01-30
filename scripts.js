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
    0: '<img src="images/index/10_clientes_1.png" alt="Cliente 1">',
    1: '<img src="images/index/11_clientes_2.png" alt="Cliente 2">',
    2: '<img src="images/index/10_clientes_1.png" alt="Cliente 3">',
    3: '<img src="images/index/11_clientes_2.png" alt="Cliente 4">',
    4: '<img src="images/index/10_clientes_1.png" alt="Cliente 5">',
    5: '<img src="images/index/11_clientes_2.png" alt="Cliente 6">',
    6: '<img src="images/index/10_clientes_1.png" alt="Cliente 7">',
    7: '<img src="images/index/11_clientes_2.png" alt="Cliente 8">',
    8: '<img src="images/index/10_clientes_1.png" alt="Cliente 9">',
    9: '<img src="images/index/11_clientes_2.png" alt="Cliente 10">'
  };

  // Referencias
  const btnSiguiente = document.getElementById('btn_Siguiente_Carrusel_2');
  const btnAnterior = document.getElementById('btn_Anterior_Carrusel_2');
  const celClientes1 = document.getElementById('Celda_Clientes_1');
  const celClientes2 = document.getElementById('Celda_Clientes_2');
  const celClientes3 = document.getElementById('Celda_Clientes_3');
  const celClientes4 = document.getElementById('Celda_Clientes_4');
  const celClientes5 = document.getElementById('Celda_Clientes_5');

  var index_C2 = 0;

  btnSiguiente.addEventListener('click', function() {
    index_C2++;
    console.log("index_C2 = ", index_C2)
    if (index_C2 >= 6) {
      // Si llega al final, vuelve al principio
      index_C2 = 0;
    }
    actualizarClientes();
  });
  btnAnterior.addEventListener('click', function() {
    index_C2--;
    console.log("index_C2 = ", index_C2)
    if (index_C2 < 0) {
      // Si llega al principio, vuelve al final
      index_C2 = 5;
    }
    actualizarClientes();
  });

  function actualizarClientes(){
    celClientes1.innerHTML = diccionario_Clientes[0 + index_C2];
    celClientes2.innerHTML = diccionario_Clientes[1 + index_C2];
    celClientes3.innerHTML = diccionario_Clientes[2 + index_C2];
    celClientes4.innerHTML = diccionario_Clientes[3 + index_C2];
    celClientes5.innerHTML = diccionario_Clientes[4 + index_C2];
  }
  // Llama a actualizarClientes inicialmente para mostrar las imágenes iniciales
  actualizarClientes();

});