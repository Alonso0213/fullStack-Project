<template>
  <div>
    <h2>Edit Product</h2>
    <a href="/admin">Back</a>
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
    },
  },
};
</script>

<style scoped></style>
