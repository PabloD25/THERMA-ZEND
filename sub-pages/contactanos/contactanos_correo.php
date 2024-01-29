<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar que los campos requeridos no estén vacíos
    if (
        !empty($_POST['nombre']) &&
        !empty($_POST['telefono']) &&
        !empty($_POST['correo']) &&
        !empty($_POST['compania']) &&
        !empty($_POST['asunto']) &&
        !empty($_POST['descripcion'])
    ) {
        // Recoger los datos del formulario
        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
        $compania = $_POST['compania'];
        $asunto = $_POST['asunto'];
        $descripcion = $_POST['descripcion'];

        // Destinatario del correo
        $destinatario = "empresa@gmail.com";

        // Asunto del correo
        $asuntoCorreo = "Nuevo formulario de contacto: $asunto";

        // Contenido del correo
        $mensaje = "Nombre: $nombre\n";
        $mensaje .= "Teléfono: $telefono\n";
        $mensaje .= "Email: $correo\n";
        $mensaje .= "Compañía: $compania\n";
        $mensaje .= "Asunto: $asunto\n";
        $mensaje .= "Descripción:\n$descripcion";

        // Cabeceras del correo
        $cabeceras = "From: $correo" . "\r\n" .
            "Reply-To: $correo" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

        // Enviar el correo
        $enviado = mail($destinatario, $asuntoCorreo, $mensaje, $cabeceras);

        if ($enviado) {
            echo "<h4>¡Correo Enviado!</h4>";
        } else {
            echo "<h4>Error al enviar el correo. Inténtelo de nuevo más tarde.</h4>";
        }
    } else {
        echo "<h4>Todos los campos son obligatorios. Complete el formulario correctamente.</h4>";
    }
}

?>
