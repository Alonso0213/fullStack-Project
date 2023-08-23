<template>
  <div>
    <h2>Product Listing</h2>
    <!-- <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      Add
    </button>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Add Product</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="submitData">
          <input type="number" v-model="postProd.prodID" placeholder="ID" />
  
          <input type="text" v-model="postProd.prodName" placeholder="Product Name" />
  
          <input type="number" v-model="postProd.quantity" placeholder="Quantity" />
  
          <input type="number" v-model="postProd.amount" placeholder="Amount" />
  
          <input type="text" v-model="postProd.category" placeholder="category" />
  
          <input type="text" v-model="postProd.prodUrl" placeholder="Picture URL" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button
        @click="AddProd(products)"
        type="button"
        class="btn btn-primary"
        data-bs-dismiss="offcanvas"
      >
        Add
      </button>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="offcanvas">
        Close
      </button>
    </div> -->

    <div class="table table-responsive-xxl">
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
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                Edit
              </button>

              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">Edit Product</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <input
                    type="number"
                    v-model="payload.prodID"
                    placeholder="Product ID"
                  />
                  <input
                    type="text"
                    v-model="payload.prodName"
                    placeholder="Product Name"
                  />
                  <input
                    type="number"
                    v-model="payload.quantity"
                    placeholder="Quantity"
                  />
                  <input type="number" v-model="payload.amount" placeholder="Amount" />
                  <input type="text" v-model="payload.category" placeholder="category" />
                  <input
                    type="text"
                    v-model="payload.prodUrl"
                    placeholder="Picture URL"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="offcanvas"
                  @submit.prevent="confimEdit(product)"
                >
                  Save
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="offcanvas"
                >
                  Close
                </button>
              </div>
              <button @click="confirmDelete(product.prodID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        prodID: "",
        prodName: "",
        quantity: "",
        prodUrl: "",
        amount: "",
        category: "",
      },
    };
  },

  // data() {
  //   return {
  //     postProd: {
  //       prodID: "",
  //       prodName: "",
  //       quantity: "",
  //       prodUrl: "",
  //       amount: "",
  //       category: "",
  //     },
  //   };
  // },

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

    // async submitData(){
    //   this.$store.dispatch('submitForm', postProd )
    // },

    confimEdit() {
      try {
        this.$store.dispatch("editProd", this.payload);
      } catch (e) {
        console.error("Product was not edited");
      }
    },
    // AddProd() {
    //   try {
    //     this.$store.dispatch("addProd", this.postProd);
    //   } catch (e) {
    //     console.error("error while trying to add product");
    //   }
    // },
  //   async submitData(){
  //     this.$store.dispatch('submitForm', this.postProd)
  //   },
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
