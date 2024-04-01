document.addEventListener('DOMContentLoaded', function() {
    console.log("El archivo carrusel.js se ha cargado correctamente.");
  
    /* Carrusel */

    // Referencias
    const containerCarrusel = document.querySelector('.Container_img_Carrusel');
    const imagenes = document.querySelectorAll('.img_carrusel');
    const numImagenes = imagenes.length;
    let imagen_actual = 0;

    // Función para cambiar la imagen del carrusel
    function cambiarImagen() {
        // Incrementar el índice de la imagen actual
        imagen_actual++;
        // Reiniciar el índice si excede la cantidad de imágenes
        if (imagen_actual >= imagenes.length) {
            imagen_actual = 0;
        }
        // Calcular la cantidad de movimiento
        const cantidadMovimiento = imagen_actual * (100 / numImagenes);
        // Mover el carrusel
        moverItem(containerCarrusel, 'izquierda', cantidadMovimiento);
    }

    // Función para mover el item
    function moverItem(item, direccion, cantidad) {
        const movimiento = direccion === 'izquierda' ? `translateX(-${cantidad}%)` : `translateX(-${cantidad}%)`;
        item.classList.add('Transicion');
        item.style.transform = movimiento;
    }

    // Iniciar el carrusel automáticamente cada 3 segundo
    setInterval(cambiarImagen, 1000);
});
