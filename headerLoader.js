function loadHeader() {
    // Cargar el encabezado de página desde header.html
    fetch('../../header.html')
        .then(response => response.text())
        .then(data => {
            // Agregar el contenido al inicio del cuerpo
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error al cargar el encabezado de página:', error));
}