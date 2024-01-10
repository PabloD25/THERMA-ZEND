document.addEventListener('DOMContentLoaded', function() {
  
  // Referencias
  const imagenes = document.querySelectorAll('#Imagen_Carrusel img');
  const btnCarrusel = document.querySelectorAll('.btn_carrusel');
  
  var imagen_actual = 0;

  btnCarrusel.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const imagen_Uno = document.querySelector('#img_carrusel_1');
      const imagen_Dos = document.querySelector('#img_carrusel_2');
      const imagen_Tres = document.querySelector('#img_carrusel_3');

      // De imagen 1 a imagen 2 o Imagen 3
      if (imagen_actual == 0 && (index === 1 || index === 2)) {
        imagen_Uno.style.animation = 'Sale_por_izquierda 1s forwards';
      }
      /**
        if (index === 1){
          imagen_Dos
        }
        else{
          imagen_Tres
        }
      }
      */
      /**
      else if (index === 1 && ){

      }
      // De imagen 2 a imagen 1
      else if(){

      }
      // De una imagen a si misma
      else{
        // No pasa nada
      }

  
      imagenActual.classList.remove('imagen-actual');
      imagenActual.classList.add('imagen-nueva');
      imagenActual.style.animation = '';
  
      imagenNueva.classList.remove('imagen-nueva');
      imagenNueva.classList.add('imagen-actual');
      imagenNueva.style.animation = '';
  
      imagenes[index].classList.add('imagen-nueva');
       */
    });
  });
});