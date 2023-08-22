<template>
  <body>
    <h2>Products</h2>
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary" for="btnradio1">All</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio2">Price</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio3"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio3">A-Z</label>
    </div>
    <div class="btn-group" role="group">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Category
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Nike</a></li>
        <li><a class="dropdown-item" href="#">Jordan</a></li>
      </ul>
    </div>
    <div class="container-fluid">
      <div class="row" v-if="products">
        <div class="col" v-for="product in products" :key="product.productId">
          <div class="card" style="width: 18rem">
            <img :src="product.prodUrl" class="card-img-top" alt="" />
            <div class="card-body">
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
                
                ><button class="btn btn-primary">View Product</button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <loadingComp/>
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

<style scoped></style>
