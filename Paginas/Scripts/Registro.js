jQuery(function () {
    $("#btnGuardar").click(async function () {
        let datos = {
            NombreUsuario: $("#txtUsuario").val(),
            Clave: $("#txtClave").val(),
            IdEmpleado: parseInt($("#txtIdEmpleado").val())
        };

        await EjecutarComandoServicio("POST", "https://localhost:44359/api/Usuarios/CrearUsuario", datos);
    });
});
