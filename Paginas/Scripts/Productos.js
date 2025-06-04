$(document).ready(function () {

    function obtenerProductoFormulario() {
        return {
            IdProducto: $("#txtIdProducto").val(),
            Nombre: $("#txtNombre").val(),
            Descripcion: $("#txtDescripcion").val(),
            Precio: parseFloat($("#txtPrecio").val()),
            Stock: parseInt($("#txtStock").val()),
            IdCategoria: $("#txtIdCategoria").val()
        };
    }

    function mostrarMensaje(tipo, mensaje) {
        let clase = tipo === "success" ? "alert-success" :
            tipo === "error" ? "alert-danger" :
                "alert-info";

        $("#dvMensaje").html(`<div class="alert ${clase}">${mensaje}</div>`);
    }

   
    $("#btnInsertar").click(function () {
        const producto = obtenerProductoFormulario();

        $.ajax({
            url: "https://localhost:44359/api/productos/insertar",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(producto),
            success: function (respuesta) {
                mostrarMensaje("success", "Producto insertado correctamente.");
                console.log(respuesta);
            },
            error: function () {
                mostrarMensaje("error", "Error al insertar producto.");
            }
        });
    });

    
    $("#btnActualizar").click(function () {
        const producto = obtenerProductoFormulario();

        $.ajax({
            url: "https://localhost:44359/api/productos/actualizar",
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(producto),
            success: function (respuesta) {
                mostrarMensaje("success", "Producto actualizado correctamente.");
                console.log(respuesta);
            },
            error: function () {
                mostrarMensaje("error", "Error al actualizar producto.");
            }
        });
    });

    $("#btnEliminar").click(function () {
        const id = $("#txtIdProducto").val();

        $.ajax({
            url: `https://localhost:44359/api/productos/eliminar?id=${id}`,
            type: "DELETE",
            success: function (respuesta) {
                mostrarMensaje("success", "Producto eliminado correctamente.");
                console.log(respuesta);
            },
            error: function () {
                mostrarMensaje("error", "Error al eliminar producto.");
            }
        });
    });

   
    $("#btnConsultar").click(function () {
        const id = $("#txtIdProducto").val();

        $.ajax({
            url: `https://localhost:44359/api/productos/consultar?id=${id}`,
            type: "GET",
            success: function (producto) {
                if (producto) {
                    $("#txtNombre").val(producto.Nombre);
                    $("#txtDescripcion").val(producto.Descripcion);
                    $("#txtPrecio").val(producto.Precio);
                    $("#txtStock").val(producto.Stock);
                    $("#txtIdCategoria").val(producto.IdCategoria);
                    mostrarMensaje("success", "Producto encontrado.");
                } else {
                    mostrarMensaje("info", "Producto no encontrado.");
                }
            },
            error: function () {
                mostrarMensaje("error", "Error al consultar producto.");
            }
        });
    });

});
