<template>

    <div class="bod">
<h2>Admin</h2>
<router-link to="/addprod" class="btn btn-primary">ADD product</router-link>
<br><br>
<router-link to="/adduser" class="btn btn-primary">ADD user</router-link>
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Raleway:ital,wght@1,100&display=swap");
h2{
  font-family:Black Ops One;
  color: black;
}
.bod{
  background-color: rgba(128, 128, 128, 0.927);
}
</style>
