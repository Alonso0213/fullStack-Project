<template>
  <div>
    <navBarComp />
    <router-view />
    <footerComp />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #f50707;
}
</style>
<script>
import navBarComp from "@/components/navBarComp.vue";
import footerComp from "@/components/footerComp.vue";
export default {
  components: {
    navBarComp,
    footerComp,
  },
};
</script>
