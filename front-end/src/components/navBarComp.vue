<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/"
        ><img
          src="https://i.postimg.cc/3Rp2z3WF/Screenshot-2023-08-22-115307-removebg-preview.png"
          alt=""
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/admin">Admin</router-link>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
.navbar-nav li {
  display: flex;
  gap: 1.5rem;
}
img {
  height: 3.4rem;
}
</style>
