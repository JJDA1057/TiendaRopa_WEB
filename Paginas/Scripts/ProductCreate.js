const App = {
    data() {
        return {
            producto:{
                Nombre:'',
                Descripcion:'',
                Precio:0,
                Stock:0
            }
        }
    },
    created(){
    },
    methods:{
        saveProduct(){
            let response = axios.post('http://www.tiendaropa.somee.com/api/productos/insertar', this.producto);
            response.then(response=>{
                alert("producto creado con exito!")
            })
        }
    }
}

const app = Vue.createApp(App);
app.mount("#createProductApp");
