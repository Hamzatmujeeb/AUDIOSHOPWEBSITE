<template>
  <section class="grid-container">
    <div class="content-column">
      <div class="text-content">
        <h2>Bringing you the<br> <span>best</span> audio gear</h2>
        <p>Located at the heart of New York City, Audiophile is the premier<br>
           store for high-end headphones, earphones, speakers, and audio<br>
           accessories. We have a large showroom and luxury<br>
           demonstration rooms available for you to browse and<br>
           experience a wide range of our products. Stop by our store to<br>
           meet some of the fantastic people who make Audiophile<br>
           the best place to buy your portable audio equipment.</p>
      </div>
    </div>
    <div class="image-column">
      <img src="@/assets/images/john.png" alt="Audiophile Store">
    </div>
  </section>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 98%;
}

.content-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-content {
  width: 80%;
  margin-left: 250px;
}

.text-content h2 {
  color: #000;
  font-family: Manrope;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 110% */
  letter-spacing: 1.429px;
  text-transform: uppercase;
}

.text-content span {
  color: #D87D4A;
  font-family: Manrope;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.429px;
  text-transform: uppercase;
}

.text-content p {
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  opacity: 0.5;
}

.image-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-column img {
  width: 60%;
  object-fit: contain;
  height: auto;
  border-radius: 10px;
}
</style>
