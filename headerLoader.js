function loadHeader(setBackgroundColor = 'transparent') {
    // Cargar el encabezado de página desde header.html
    fetch('../../header.html')
        .then(response => response.text())
        .then(data => {
            // Agregar el contenido al inicio del cuerpo
            document.body.insertAdjacentHTML('afterbegin', data);

            // Modificar el estilo del encabezado según el parámetro setBackgroundColor
            const header = document.querySelector('.Encabezado');
            header.style.backgroundColor = setBackgroundColor;
        })
        .catch(error => console.error('Error al cargar el encabezado de página:', error));
}