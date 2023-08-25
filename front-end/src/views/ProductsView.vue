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
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button @click="SortName">sort by name</button>
      <button @click="SortPrice">sort by price</button>
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
body {
  background-color: rgba(0, 0, 0, 0.913);
}
</style>
