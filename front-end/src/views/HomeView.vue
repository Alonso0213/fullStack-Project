<template>
  <body>
    <h2 class="h2-1">Home</h2>
    <div class="row">
      <div class="col">
        <img
          src="https://i.postimg.cc/YqRrsStK/7caffdc0d35b222335e75f74596c59f3-removebg-preview.png"
          alt="img"
          loading="lazy"
        />
        <div class="col"><h2 col-3>Welcome To</h2>
        <img src="https://i.postimg.cc/jjckRQXt/Screenshot-2023-08-22-115911-removebg-preview.png" alt="logo" class="img1"></div>
      </div>
    </div>

    <div class="ft-prod">
      <center><h2 class="h2-2">Featured Products</h2></center>
      <center><FtprodComp /></center>
    </div>
  </body>
</template>

<script>
import FtprodComp from "../components/FtProdCom.vue";
export default {
  components: {
    FtprodComp,
  },
};
</script>

<style scoped>
body {
  background-color: #000000;
}
.h2-1 {
  background-color: grey;
}
.h2-2 {
  color: whitesmoke;
}
img {
  height: 30rem;
}
.img1{
  height: 20rem;

}
.move-pic {
  display: flex;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.col {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: whitesmoke;
  text-decoration:dotted solid red;
}
</style>
