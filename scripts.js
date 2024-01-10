document.addEventListener('DOMContentLoaded', function() {
  
  // Referencias
  const btnCarrusel = document.querySelectorAll('.btn_carrusel');
  const tablaCarrusel = document.querySelector('.Tabla_Img_Carrusel');

  
  // Funciones
  function moverDerecha(item) {
    item.classList.add('Transicion');
    item.style.transform = 'translateX(100%)';
  }
  function moverIzquierda(item) {
    item.classList.add('Transicion');
    item.style.transform = 'translateX(-100%)';
  }

  var imagen_actual = 0;

  btnCarrusel.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      if(index === 0 ){
        moverDerecha(tablaCarrusel)
      }
      else if(index === 2){
        moverIzquierda(tablaCarrusel)
      }


    });
  });

});