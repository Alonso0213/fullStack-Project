<template>
    <div>
<h2>Admin</h2>
<router-link to="/addprod">ADD</router-link>
<AdminComp/>
    </div>
</template>

<script>
import AdminComp from '../components/AdminComp.vue'
    export default {
        components:{
            AdminComp
        }
    }
</script>

<style scoped>

</style>