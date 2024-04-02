function correoContactenos() {
    // Dirección de correo electrónico
    var correoDestino = "thefaceyouwerelookingfor@gmail.com";
    // Asunto del correo
    var asunto = "Correo Contactenos";

    // Valores de los campos de la tabla
    var nombre = document.querySelector('input[name="nombre"]').value;
    var telefono = document.querySelector('input[name="telefono"]').value;
    var correo = document.querySelector('input[name="correo"]').value;
    var compania = document.querySelector('input[name="compania"]').value;
    var descripcion = document.querySelector('textarea[name="descripcion"]').value;

    // Construir el cuerpo del correo con los datos recolectados
    var cuerpoCorreo = "Nombre: " + nombre + "\n" +
    "Teléfono: " + telefono + "\n" +
    "Correo: " + correo + "\n" +
    "Compañía: " + compania + "\n" +
    "Descripción: " + descripcion;
    
    // Codificar el asunto y el cuerpo para que sean parte del enlace mailto
    asunto = encodeURIComponent(asunto);
    cuerpoCorreo = encodeURIComponent(cuerpoCorreo);
    
    // Generar el enlace mailto con el correo de destino, el asunto y el cuerpo
    var enlaceMailto = "mailto:" + correoDestino + "?subject=" + asunto + "&body=" + cuerpoCorreo;

    // Abrir el cliente de correo predeterminado con el enlace mailto
    window.location.href = enlaceMailto;
}