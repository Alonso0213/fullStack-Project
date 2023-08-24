<template>
  <div>
    <h2>Product Listing</h2>
    <div class="table table-responsive-xxl">
      <AddProdCompVue />
      <table
        class="table table-warning table-striped table-hover table-bordered border-warning"
      >
        <thead>
          <tr>
            <th scope="col">ID:</th>
            <th scope="col">Product Name:</th>
            <th scope="col">Quantity:</th>
            <th scope="col">Image:</th>
            <th scope="col">Amount:</th>
            <th scope="col">category:</th>
            <th scope="col">Edit/Delete:</th>
          </tr>
        </thead>
        <tbody v-for="product in products" id="display-items" :key="product.prodID">
          <tr>
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td><img class="pic" :src="product.prodUrl" alt="img" /></td>
            <td>£{{ product.amount }}</td>
            <td>{{ product.category }}</td>
            <td>
              <router-link :to="{name: 'editprod', params: { id: product.prodID } }"
              >edit</router-link>
            <button @click="confirmDelete(product.prodID)">Delete</button>
          </td>
        </tr>
      <!-- </tbody>
        <thead>
          <tr>
            <th scope="col">firstName:</th>
            <th scope="col">lastName:</th>
            <th scope="col">userAge:</th>
            <th scope="col">userProfile:</th>
            <th scope="col">gender:</th>
            <th scope="col">emailAdd:</th>
            <th scope="col"></th>
          </tr>
        </thead> -->
        <!-- <tbody v-for="user in users" id="display-items" :key="user.userID">
          <tr>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td><img class="pic" :src="user.userProfile" alt="img" /></td>
            <td>{{ user.gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
          </td>
        </tr> -->
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  }, 

  methods: {
    confirmDelete(prodID) {
      if (confirm("Please confirm")) {
        try {
          this.$store.dispatch("deleteProd", prodID);
        } catch (e) {
          console.error("Error deleting product:", error);
        }
      }
    },
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
.pic {
  width: 7rem;
}
</style>
