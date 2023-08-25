<template>

    <div>
<h2>Admin</h2>
<router-link to="/addprod">ADD product</router-link>
<br>
<router-link to="/adduser">ADD user</router-link>
<AdminComp/>
    </div>


</template>

<script>
import AdminComp from "../components/AdminComp.vue";
export default {
  components: {
    AdminComp,

  },
};
</script>

<style scoped></style>
