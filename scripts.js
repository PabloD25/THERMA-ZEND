document.addEventListener('DOMContentLoaded', function() {
  
  // Referencias
  const imagenes = document.querySelectorAll('#Imagen_Carrusel img');
  const btnCarrusel = document.querySelectorAll('.btn_carrusel');
  
  btnCarrusel.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const imagenActual = document.querySelector('.imagen-actual');
      const imagenNueva = document.querySelector('.imagen-nueva');
  
      imagenActual.classList.remove('imagen-actual');
      imagenActual.classList.add('imagen-nueva');
      imagenActual.style.animation = '';
  
      imagenNueva.classList.remove('imagen-nueva');
      imagenNueva.classList.add('imagen-actual');
      imagenNueva.style.animation = '';
  
      imagenes[index].classList.add('imagen-nueva');
    });
  });
});