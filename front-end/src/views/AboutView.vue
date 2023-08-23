<template>
  <div>
    <body class="container-fluid">
      <h2>Who we are😎😉</h2>
      <div class="row">
        <div class="col">
          <img
            class="img1"
            src="https://i.postimg.cc/hjGc9nmL/e2140f371a7d450c8721f68a7dd42568.webp"
            alt="img"
            loading="lazy"
          />
          <div class="col">
            <br />
            <p col-3>
              Discover Limitless, the ultimate haven for sneaker enthusiasts
              seeking exclusive and limited edition footwear. <br />
              Our curated collection features rare and one-of-a-kind shoes that
              transcend conventional fashion.<br />
              Each pair is a masterpiece of creativity, showcasing unique
              designs and materials. <br />
              Immerse yourself in an extraordinary shopping journey on our
              user-friendly website, exploring detailed designs and
              craftsmanship stories. <br />
              With a commitment to quality and secure global shipping, Limitless
              is the destination to express your individuality through
              exceptional limited edition sneakers
            </p>
          </div>
        </div>
      </div>

      <h2>Our Mission</h2>
      <div class="row">
        <div class="col">
          <img
            class="img1"
            src="https://i.postimg.cc/1XnSjKJ4/82797744.webp"
            alt="img"
            loading="lazy"
          />
          <div class="col">
            <br />
            <p col-3>
              Limitless is dedicated to enabling self-expression through limited
              edition shoes. <br />
              Our mission revolves around curating an exceptional collection
              that transcends conventional fashion, telling unique stories.
              <br />
              We emphasize inclusivity, exceptional experiences, community
              engagement, and sustainability. <br />
              We aspire to empower individuals to express their uniqueness and
              style boldly through exclusive footwear.
            </p>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel&family=Crimson+Text&family=Orbitron&display=swap");

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.col {
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
img {
  height: 22rem;
  border-radius: rem;
}
body {
  background: url(https://i.postimg.cc/02vSVRHT/11204875-graffiti-wall-urban-hip-hop-background.jpg)
    no-repeat;
  background-size: cover;
}

p {
  background-color: rgba(0, 0, 0, 0.874);
  color: white;
}
h2 {
  background-color: rgba(0, 0, 0, 0.874);
  color: white;
}
@media (width<550) {
  .img1 {
    height: 22rem;
  }
}
@media (width>550) {
  .img1 {
    height: 10rem;
  }
}
</style>
