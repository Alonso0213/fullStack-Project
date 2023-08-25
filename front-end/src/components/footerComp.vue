<template>
  <footer
    class="bd-footer py-4 py-md-5 mt-10 bg-body-tertiary"
    data-bs-theme="dark"
  >
  <div class="space">
    <div class="bot">
    <h6>Mujahid Fisher</h6>
    <h6>fishermujahid@gmail.com</h6>
    <h6>069 966 6173</h6>
    <h6>Alonso Cupido</h6>
    <h6>alonsocupido51@gmail.com</h6>
    <h6>061 460 5377</h6>
  </div>

    
<center>
    <img class="logo"
      src="https://i.postimg.cc/sxr5rbhd/Screenshot-2023-08-22-114334-removebg-preview.png"
      alt="logo"
    />
</center>
    <center><p>Limitless ©copyright 2023</p></center>
    <p>
      Rights reserved by <br />
      Alonso & Mujahid
    </p>
    <div class="socails">
      <a href="#">
        <img
          src="https://i.postimg.cc/PJjw68bK/2021-Facebook-icon-svg.png"
          loading="lazy"
          alt="icon"
      /></a>
      <a href="#"
        ><img
          src="https://i.postimg.cc/TPKghxYj/instagram-icon-logo-free-png.webp"
          loading="lazy"
          alt="icon"
      /></a>
      <a href="#"
        ><img
          src="https://i.postimg.cc/sgDpdSkN/702300.png"
          alt="icon"
          loading="lazy"
      /></a>
      <a href="#">
        <img
          src="https://i.postimg.cc/hjW0BMZZ/sne56107789919.webp"
          alt="icon"
          loading="lazy"
      /></a>
    </div>
</div>
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

.logo {
  display: flex;
  justify-content: center;
  margin-top: -150px;
  border: 4px rgba(255, 0, 0, 0.342) solid;
  width: 6rem;
  height: 6rem;
}

.bot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: -20px;
  width: 200px;
  color: rgba(255, 255, 255, 0.418);
}

img {
  height: 5rem;
  border-radius: 6rem;
  transition: all 0.3s ease-in-out
}
img:hover{
  transform: scale(1.5);
}

.space {
  display: grid;

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
  margin-top: -20px;
}
.socails img {
  height: 2.4rem;
  margin-top: -50px;
  margin-left: 10px;
}
.socails {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

@media (width <= 624px) {
  .socails {
    margin: 30px;
  }

  p {
    margin: auto;

  }
  .bot {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    margin-top: -20px;
    width: 200px;
    color: rgba(255, 255, 255, 0.418);
  }
  .logo{
margin-top:45px ;
  }

}
</style>
