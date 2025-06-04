jQuery(function () {
    $("#btnGuardar").click(async function () {
        let datos = {
            NombreUsuario: $("#txtUsuario").val(),
            Clave: $("#txtClave").val(),
            IdEmpleado: parseInt($("#txtIdEmpleado").val())
        };

        try {
            await EjecutarComandoServicio("POST", "http://www.tiendaropa.somee.com/api/Usuarios/CrearUsuario", datos);
            window.location.href = "Login1.html"; 
        } catch (error) {
            $("#dvMensaje").text("Error al registrar el usuario");
        }
    });
});
