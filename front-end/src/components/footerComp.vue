<template>
  <footer
    class="bd-footer py-4 py-md-5 mt-10 bg-body-tertiary"
    data-bs-theme="dark"
  >
    <div class="col-lg-3 mb-3">
      <div class="space">
        <img
          src="https://i.postimg.cc/sxr5rbhd/Screenshot-2023-08-22-114334-removebg-preview.png"
          alt="logo"
        />
      </div>
    </div>
      <p class="copy">Limitless ©copyright 2023</p>
    <div class="line"></div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.copy {
  text-align: center;
}
img {
  height: 5rem;
  border-radius: 6rem;
}
.space {
  display: flex;
  gap: 1.5rem;
}
.word {
  color: aliceblue;
}
.line {
  border-bottom: 2px solid rgb(255, 255, 255);
  margin-top: 5px;
  width: 100%;
}
p {
  color: white;
}
</style>
