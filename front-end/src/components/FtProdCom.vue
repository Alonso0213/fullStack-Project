<template>
  <div>
    <div class="container-fluid">
      <div class="row" v-if="products">
        <div class="col" v-for="product in products" :key="product.productId">
          <div class="card" style="width: 16rem">
            <img :src="product.prodUrl" class="card-img-top" alt="" />
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
                ><button class="btn btn-primary">
                  View Product
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <loadingComp />
      </div>
    </div>
  </div>
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
@media (width <= 624px) {
  .row{
    display: grid;
    justify-content: center;
  }
}
</style>
