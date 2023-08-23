<template>
  <div>
    <h2>Product Listing</h2>
    <button
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
        <input type="number" placeholder="ID" />
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="Quantity" />
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="category" />
        <input type="text" placeholder="Picture URL" />
      </div>
      <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas">
        Add
      </button>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="offcanvas">
        Close
      </button>
    </div>

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
        <tbody v-for="product in products" id="display-items" :key="product.productId">
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
                @click="editProd(product.prodID)"
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
                  <input type="number"
                  v-model="model.products.prodID" placeholder="ID" />
                  <input type="text" v-model="model.products.prodName" placeholder="Product Name" />
                  <input type="number" v-model="model.products.quantity" placeholder="Quantity" />
                  <input type="number" v-model="model.products.amount" placeholder="Amount" />
                  <input type="text" v-model="model.products.category" placeholder="category" />
                  <input type="text" v-model="model.products.prodUrl" placeholder="Picture URL" />
                </div>
                <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas">
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
              <button @click="deleteProd(product.prodID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            model: {
                products: {
                    prodID: "",
                    prodName: "",
                    quantity: "",
                    prodUrl: "",
                    amount: "",
                    category: "",
                }
            }
        }
    },
  methods: {
    deleteProd(prodID) {
      if (prodID) {
        axios.delete(`https://limitless-api.onrender.com/product/${prodID}`);
          location.reload()
          alert("Please confirm.")
      }   
    },

    // editProd(prodID) {
    //   console.log(prodID);
    //   this.getProdData(prodID)
    // },
    // getProdData(prodID){
    //     axios.get(`https://limitless-api.onrender.com/product/${prodID}`).then(res =>{
    //         console.log(res.data.results);
    //         this.model.products = res.data.results
    //     })
    // },
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
