<template>
    <body>
        <h2>Products</h2>
        <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card" style="width: 18rem;" >
          <img :src="$route.query.img" class="card-img-top" :alt="$route.query.img">
          <div class="card-body">
            <h5 class="card-title">{{ $route.query.name}}</h5>
            <p class="card-text"><span>{{ $route.query.category}}</span></p>
            <p class="card-text"><span> £{{ $route.query.amount}}</span></p> 
          </div>
        </div>
            </div>
        </div>
    </div>
    </body>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>