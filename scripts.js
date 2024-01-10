document.addEventListener('DOMContentLoaded', function() {
  
  // Referencias
  const btnCarrusel = document.querySelectorAll('.btn_carrusel');
  const tablaCarrusel = document.querySelector('.Tabla_Img_Carrusel');

  
  // Funciones
  function moverItem(item, direccion) {
    const movimiento = direccion === 'izquierda' ? 'translateX(-100%)' : 'translateX(100%)';
    item.classList.add('Transicion');
    item.style.transform = movimiento;
  }

  var imagen_actual = 0;

  btnCarrusel.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      // Imagen 1 (Origen)
      if(imagen_actual == 0){
        // Imagen 2 (Destino)
        if(index === 1)
        // Imagen 3 (Destino)
      }
      // Imagen 2 (Origen)
      else if(imagen_actual == 1){
        // Imagen 1 (Destino)
        // Imagen 3 (Destino)
      }
      // Imagen 3 (Origen)
      else if(imagen_actual == 2){
        // Imagen 1 (Destino)
        // Imagen 2 (Destino)
      }

      if(index != imagen_actual){
        // Recuerda que en los if, el valor usado es uno menor que el numero de imagen
        // Imagen 1 = Index[0]

        // Imagen 1 --> Imagen 2
        if(imagen_actual == 0 && index === 1){
          moverIzquierda(tablaCarrusel)
          imagen_actual = 1;
        }        
        // Imagen 1 --> Imagen 3
        else if(imagen_actual == 0 && index === 2){
          moverIzquierda(tablaCarrusel)
          moverIzquierda(tablaCarrusel)
          imagen_actual = 2;
        }
        // Imagen 2 --> Imagen 1
        else if(imagen_actual == 1 && index === 0){
          moverDerecha(tablaCarrusel)
          imagen_actual = 0;
        }
        // Imagen 2 --> Imagen 3
        else if(imagen_actual == 1 && index === 2){
          moverIzquierda(tablaCarrusel)
          imagen_actual = 2;
        }
        // Imagen 3 --> Imagen 1
        else if(imagen_actual == 2 && index === 0){
          moverDerecha(tablaCarrusel)
          moverDerecha(tablaCarrusel)
          imagen_actual = 0;
        }
        // Imagen 3 --> Imagen 2
        else if(imagen_actual == 2 && index === 1){
          moverDerecha(tablaCarrusel)
          imagen_actual = 1;
        }
      }
    });
  });

});