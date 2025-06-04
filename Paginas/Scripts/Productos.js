const App = {
    name:"productos",
    data() {
        return {
            msg: 'Productos',
            productList:[]
        }
    },
    created(){
        this.loadProducts();
    },
    methods:{
        deleteProdutc(id){
            let response = axios.delete('https://localhost:44359/api/productos/eliminar?id='+id);
            response.then(response=>{
                alert('El producto con id: '+id+'se elimino correctamente!');
                this.loadProducts();
            })
        },
        updateProduct(){
            alert('producto Actualizado exitosamente')
        },
        loadProducts(){
            let response = axios.get('https://localhost:44359/api/productos/consultarTodos');
        response.then(response=>{
            this.productList = response.data;
        });
        }

    }
}

const app = Vue.createApp(App);
app.mount("#myApp");
