<template>
  <body class="container-fluid">
    <h2>Products</h2>
    <div class="container-fluid">
      <div class="row" v-if="products">
        <div class="col" v-for="product in products" :key="product.productId">
          <div class="card border-danger" style="width: 18rem">
            <img :src="product.prodUrl" class="card-img-top" alt="img" loading="lazy"/>
            <div
              class="https://previews.123rf.com/images/sergwsq/sergwsq1111/sergwsq111100030/11204875-graffiti-wall-urban-hip-hop-background.jpg"
            >
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">
                <span>{{ product.category }}</span>
              </p>
              <p class="card-text">
                <span> £{{ product.amount }}</span>
              </p>
              <router-link
                :to="{
                  name: 'single',
                  params: { id: product.productId },
                  query: {
                    name: product.prodName,
                    category: product.category,
                    img: product.prodUrl,
                    amount: product.amount,
                  },
                }"

                ><button class="view">View Product</button></router-link
                >
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <loadingComp />
      </div>
    </div>
    
    
  </body>
</template>

<script>
import loadingComp from "./loadingComp.vue";
export default {
  components: {
    loadingComp,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Raleway:ital,wght@1,100&display=swap");
h2{font-family:Black Ops One;}
body div #move {
  display: grid;
  justify-content: end;
}
body {
  background: url(https://i.postimg.cc/02vSVRHT/11204875-graffiti-wall-urban-hip-hop-background.jpg)
    no-repeat;
  background-size: cover;
  
}

.view{
  border: 2px black solid;
  border-radius: 20px;
  height: 40px;
  background-color: rgba(88, 9, 9, 0.792);
  color: rgb(177, 175, 175);
}

.view:hover {
  background-color: rgb(13, 4, 60);
  color: white;

}

.view:focus {
  cursor: progress;
}
.row {
  background-color: rgba(0, 0, 0, 0.902);
}
h2 {
  background-color: rgba(0, 0, 0, 0.902);
  color:whitesmoke
}
#butt {
  background-color: black;
  color: red;
  outline-color: black;
}
label {
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.813);
}
.color{
  background-color: rgba(0, 0, 0, 0.913);
}

.card {
  padding: 20px;
  margin: 10px;
}


@media (width <= 400px) {
  .card{
    width: 11rem;
  }
 }
 @media (width <= 624px) {
  .row{
    display: grid;
    justify-content: center;
  }
.card{
  width: 12rem !important;
}


 }
</style>
