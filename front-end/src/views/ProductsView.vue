<template>
  <body>
    <div>
      <form class="d-flex" role="search" @submit.prevent="performSearch">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchTerm"
        />
        <button  class="btn text-bg-danger btn-outline-success" type="submit">Search</button>
      </form>
      <button class="sort" @click="SortName">sort by name</button>
      <button class="sort" @click="SortPrice">sort by price</button>
      <cardComp />
    </div>
  </body>
</template>

<script>
import cardComp from "../components/cardComp.vue";

export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  components: {
    cardComp,
  },
  methods: {
    performSearch() {
      this.$store.dispatch("searchProducts", this.searchTerm)
    },
    SortName() {
      this.$store.dispatch("FilterName")
    },
    SortPrice() {
      this.$store.dispatch("FilterPrice")
    }
  }
};
</script>

<style scoped>

.sort {
  border-radius: 10px;
  padding: 10px;
margin: 10px;
background-color: rgb(136, 0, 0);
color: rgb(254, 254, 254);
box-shadow: 10px 10px 5px;
}
.sort:hover {
  background: white;
  color: red;

}

body {
  background-color: rgba(0, 0, 0, 0.913);
}
@media (width <= 400px) {
  .card{
    width: 11rem;
  }
 }
</style>
