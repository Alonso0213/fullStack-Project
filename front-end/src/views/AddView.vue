<template>
    <div>
        <h2>ADD</h2>
        <a href="/admin">Back</a>
        <form @submit.prevent="ConfimAdd">
            <input v-model="addprod.prodID" type="number" placeholder="ID">
            <input v-model="addprod.prodName" type="text" placeholder="Product Name">
            <input v-model="addprod.quantity" type="number" placeholder="Quantity">
            <input v-model="addprod.prodUrl" type="text" placeholder="Image URL">
            <input v-model="addprod.amount" type="number" placeholder="Price">
            <input v-model="addprod.category" type="text" placeholder="Category">
            <button type="submit">Add</button>
        </form>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                addprod: {
                    prodID: "",
                    prodName: "",
                    quantity: "",
                    prodUrl: "",
                    amount: "",
                    category: ""
                }
            }
        },
        methods: {
            async ConfimAdd() {
                this.$store.dispatch("ConfimAddprod", this.addprod)
            }
        }
    }
</script>

<style scoped>

</style>