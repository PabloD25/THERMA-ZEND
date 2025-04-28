function openWhatsApp() {
    var numeroTelefono = "5516534146";
    window.open("whatsapp://send?phone=" + numeroTelefono);
    }

function enviarCorreo() {
    // Dirección de correo electrónico
    var correoDestino = "pablotorres11001@gmail.com";
    // Asunto del correo
    var asunto = "Información de Maquinas";

    // Codificar el asunto para que sea parte del enlace mailto
    asunto = encodeURIComponent(asunto);

    // Generar el enlace mailto con el correo de destino y el asunto
    var enlaceMailto = "mailto:" + correoDestino + "?subject=" + asunto;

    // Abrir el cliente de correo predeterminado con el enlace mailto
    window.location.href = enlaceMailto;
}