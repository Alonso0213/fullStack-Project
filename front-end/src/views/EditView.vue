<template>
  <div>
    <h2>Edit Product</h2>
    <form @submit.prevent="EditProd">
      <input v-model="editprod.prodName" type="text" placeholder="Product Name" />
      <input v-model="editprod.quantity" type="number" placeholder="Quantity" />
      <input v-model="editprod.prodUrl" type="text" placeholder="Image URL" />
      <input v-model="editprod.amount" type="number" placeholder="Price" />
      <input v-model="editprod.category" type="text" placeholder="Category" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editprod: {
        prodID: this.id,
        prodName: "",
        quantity: 0,
        prodUrl: "",
        amount: 0,
        category: "",
      },
    };
  },
  props: ["id"],
  methods: {
    EditProd() {
      this.$store.dispatch("ConfimEditProd", this.editprod);
      this.editprod.prodName = data.prodName;
      this.editprod.quantity = data.quantity;
      this.editprod.prodUrl = data.prodUrl;
      this.editprod.amount = data.amount;
      this.editprod.category = data.category;
    },
  },
};
</script>

<style scoped></style>
