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
            let response = axios.delete('http://www.tiendaropa.somee.com/api/productos/eliminar?id='+id);
            response.then(response=>{
                alert('El producto con id: '+id+'se elimino correctamente!');
                this.loadProducts();
            })
        },
        updateProduct(){
            alert('producto Actualizado exitosamente')
        },
        loadProducts(){
            let response = axios.get('http://www.tiendaropa.somee.com/api/productos/consultarTodos');
        response.then(response=>{
            this.productList = response.data;
        });
        }

    }
}

const app = Vue.createApp(App);
app.mount("#myApp");
