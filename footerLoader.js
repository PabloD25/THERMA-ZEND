function loadFooter() {
    // Cargar el pie de página desde footer/footer.html
    fetch('../../footer.html')
        .then(response => response.text())
        .then(data => {
            // Agregar el contenido al final del cuerpo
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error al cargar el pie de página:', error));
}