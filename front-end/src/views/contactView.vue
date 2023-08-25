<template>
  <div class="bod">
    <h2>Contact us</h2>
    <contactComp/>
  </div>
</template>

<script>
import contactComp from '../components/contactComp.vue'
export default {
  components:{
    contactComp
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Raleway:ital,wght@1,100&display=swap");
h2{font-family:Black Ops One;}
.bod{
  background-color:  rgb(74, 73, 73);
}
h2{
  color: whitesmoke;
}
</style>
