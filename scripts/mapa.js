function initMap() {
    // Coordenadas de la ubicación que deseas mostrar
    var ubicacion = { lat: 19.4326, lng: -99.1332 }; // Por ejemplo, Ciudad de México

    // Crear el mapa con las opciones de visualización
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: ubicacion,
        zoom: 10 // Nivel de zoom inicial
    });

    // Agregar un marcador en la ubicación
    var marcador = new google.maps.Marker({
        position: ubicacion,
        map: mapa,
        title: 'Ubicación'
    });
}
