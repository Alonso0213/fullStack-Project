<template>
    <div>
        <h2>ADD User</h2>
        <a href="/admin">Back</a>
        <form @submit.prevent="ConfimAddU">
            <input v-model="adduser.userID" type="number" placeholder="ID">
            <input v-model="adduser.firstName" type="text" placeholder="firstName">
            <input v-model="adduser.lastName" type="text" placeholder="lastName">
            <input v-model="adduser.userAge" type="number" placeholder="userAge">
            <input v-model="adduser.userProfile" type="text" placeholder="userProfile">
            <input v-model="adduser.userPass" type="text" placeholder="userPass">
            <input v-model="adduser.gender" type="text" placeholder="gender">
            <input v-model="adduser.emailAdd" type="text" placeholder="Email">
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                adduser: {
                    userID: "",
                    firstName: "",
                    lastName: "",
                    userAge: "",
                    userProfile: "",
                    userPass: "",
                    gender: "",
                    emailAdd: ""
                }
            }
        },
        methods: {
            ConfimAddU() {
                this.$store.dispatch("ConfimAdduser", this.adduser)
            }
        }
        
    }
</script>

<style scoped>

</style>