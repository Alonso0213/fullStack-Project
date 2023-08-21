<template>
    <body>
        <h2>Products</h2>
        <div class="container-fluid">
        <div class="row">
            <div class="col" v-for="product in products" :key="product.productId">
                <div class="card" style="width: 18rem;" >
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ product.url}}</h5>
            <p class="card-text"><span> {{ product.amount}}</span>.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
            </div>
        </div>
    </div>
    </body>
    
</template>

<script>

    export default {
        components:{
           
        },
        computed: {
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>

</style>