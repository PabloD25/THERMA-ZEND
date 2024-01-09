const contenedor = document.getElementById('contenedor');
const titulo1 = document.getElementById('titulo1');
const titulo2 = document.getElementById('titulo2');

titulo1.addEventListener('click', () => {
  contenedor.style.backgroundImage = "url('images/Imagen1.png')"; // Reemplaza con la ruta de tu primera imagen
});

titulo2.addEventListener('click', () => {
  contenedor.style.backgroundImage = "url('images/Imagen2.png')"; // Reemplaza con la ruta de tu segunda imagen
});
