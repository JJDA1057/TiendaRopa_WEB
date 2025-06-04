async function Ingresar() {
    let BaseURL = "http://www.tiendaropa.somee.com/";
    let URL = BaseURL + "/api/Login/Ingresar";

    const login = {
        Usuario: $("#txtUsuario").val(),
        Clave: $("#txtClave").val()
    };

   
    const Respuesta = await EjecutarComandoServicioRpta("POST", URL, login);
    console.log("Respuesta recibida:", Respuesta);
    if (Respuesta === undefined) {
        document.cookie = "token=0;path=/";
        $("#dvMensaje").removeClass("alert alert-success").addClass("alert alert-danger").html("No se pudo conectar con el servicio");
    } else {
        if (Respuesta.Autenticado == false) {
            document.cookie = "token=0;path=/";
            $("#dvMensaje").removeClass("alert alert-success").addClass("alert alert-danger").html(Respuesta.Mensaje);
        } else {
            const extdays = 5;
            const d = new Date();
            d.setTime(d.getTime() + (extdays * 24 * 60 * 60 * 1000));
            let expires = ";expires=" + d.toUTCString();

            document.cookie = "token=" + Respuesta.Token + expires + ";path=/";
            document.cookie = "Perfil=" + Respuesta.Perfil + expires + ";path=/";
            document.cookie = "Usuario=" + Respuesta.Usuario + expires + ";path=/";

            $("#dvMensaje").removeClass("alert alert-danger").addClass("alert alert-success").html(Respuesta.Mensaje);

            window.location.href = "productos.html";
        }
    }
}
