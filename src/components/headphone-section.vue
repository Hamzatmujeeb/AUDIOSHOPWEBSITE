<template>
    <div class="container">
      <div class="products-container">
        <div class="products-columns">
          <img src="@/assets/images/headphone.png" alt="Headphone 1">
          <h3>Headphone</h3>
          <div class="content">
            <p>Shop</p>
            <img src="@/assets/images/next.png" alt="" class="next">
          </div>
        </div>
        <div class="products-columns">
          <img src="@/assets/images/product-speaker.png" alt="Headphone 2">
          <h3>SPEAKERS</h3>
          <div class="content">
            <p>Shop</p>
            <img src="@/assets/images/next.png" alt="" class="next">
          </div>
        </div>
        <div class="products-columns">
          <img src="@/assets/images/bluetooth.png" alt="Headphone 3">
          <h3>EARPHONES</h3>
          <div class="content">
            <p>Shop</p>
            <img src="@/assets/images/next.png" alt="" class="next">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
.container {
  display: flex;
  justify-content: center;
  padding-top: 8.5rem;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(3, 22rem);
  gap: 4.0625rem;
  padding: 4.375rem;
  place-content: center;
  margin: 0 120px 0 150px;
}

.products-columns {
  text-align: center;
  background-color: #F1F1F1;
  position: relative;
  z-index: 1;
  width: 350px;
  height: 204px;
  flex-shrink: 0;
  border-radius: 0.5rem;
}

.products-columns img {
  width: 122.947px;
  height: 160px;
  object-fit: contain;
  position: absolute;
  bottom: 8.625rem;
  left: 50%;
  transform: translateX(-60%);
  z-index: -1;
}

.products-columns h3 {
  margin: 90px;
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 1.625rem;
  left: 50%;
  transform: translateX(-50%);
}

.products-columns p {
  margin-bottom: 2px;
  color: #000;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
  margin-right: 5px; /* Adjust the space between p tag and next button */
}

.content .next {
    width: 0.438rem;
    height:0.625rem;
    margin-bottom: -8.26rem;
    margin-left:2.188rem;
    cursor: pointer;
  }
</style>