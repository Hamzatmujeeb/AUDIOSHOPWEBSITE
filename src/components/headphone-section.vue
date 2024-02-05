<template>
  <section class="section__wrapper">
    <div class="section__wrapper__container">
      <div class="Section__column">
        <img src="@/assets/images/headphone.png" alt="Headphone 1" class="product__img">
        <div class="product__name">
          <h2>HEADPHONES</h2>
          <div class="shop-container">
            <p class="shop">Shop</p>
            <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button">
          </div>
        </div>
      </div>

      <div class="Section__column">
        <img src="@/assets/images/product-speaker.png" alt="Headphone 2" class="product__img">
        <div class="product__name">
          <h2>HEADPHONES</h2>
          <div class="shop-container">
            <p class="shop">Shop</p>
            <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button">
          </div>
        </div>
      </div>

      <div class="Section__column">
        <img src="@/assets/images/bluetooth.png" alt="Headphone 3" class="product__img">
        <div class="product__name">
          <h2>HEADPHONES</h2>
          <div class="shop-container">
            <p class="shop">Shop</p>
            <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA; 
  height: 40rem;
}

.section__wrapper__container {
  display: flex;
  justify-content: space-around; 
  width: 80rem;
}

.Section__column {
  flex: 0 0 calc(30% - 10px);
  height: 15.75rem;
  width: 15.875rem;
  text-align: center;
  background: #F1F1F1;
  border-radius: 0.5rem;
}

.Section__column .product__img {
  position: relative; 
  flex: 0 0 calc(30% - 5px);
  top: -70px;
  z-index: 1;
  width: 11.125rem;
  height: 10.0625rem;
  flex-shrink: 0;
  object-fit: contain;
}

.product__name {
  position: relative;
}

.shop-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the gap between <p> and <img> */
}

.product__name h2 {
  margin-top: -15px;
  color: #000;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.08038rem;
  text-transform: uppercase;
}

p.shop {
  color: #000;
  margin-top: 11px;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  opacity: 0.5;
}
</style>
