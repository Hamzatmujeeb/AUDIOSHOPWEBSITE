<template>
  <div class="main-container">
    <div class="ZX9-container">
      <div class="first-section">
        <div class="background-image"></div>
        <div class="product-images-wrap">
          <img src="@/assets/images/big-speaker.png" class="product-images" alt="Speaker" />
        </div>
        <div class="first-section__content">
          <div class="container-text">
            <h2>ZX9<br />SPEAKER</h2>
          </div>
          <p class="text-paragraph">
            Upgrade to premium speakers that are<br />
            phenomenally built to deliver truly remarkable<br />
            sound.
          </p>
          <div class="See-product">
            <button>See Product</button>
          </div>
        </div>
        <!-- <div class="small-speaker">
          <img src="@/assets/images/small-speaker.png" alt="" />
          <h2 class="zx-text">ZX7 <br />SPEAKER</h2>
          <div class="see-button-container">
            <button>See Product</button>
          </div>
        </div> -->
      </div>
      <!-- <div class="second-section">
        <div class="custom-container">
          <div class="custom-grid">
            <div class="custom-left">
              <img src="@/assets/images/ipord.png" alt="" />
            </div>
            <div class="custom-right">
              <h2>YX1 EARPHONES</h2>
              <button>SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.ZX9-container {
  border-radius: 0.5rem;
  max-width: 1110px;
  margin: 0 auto;
  margin-bottom: 20rem;
  overflow: hidden;
  position: relative;
}

.first-section {
  background: #d87d4a;
  display: flex;

  .product-images-wrap {
    flex-basis: 60%;
    text-align: center;
  }

  &__content {
    margin: 7.75rem 0;
  }
}

.product-images {
  max-width: 25.625rem;
  position: relative;
  bottom: -6.7rem;
  scale: 1.08;
}

.background-image {
  background-image: url('@/assets/images/oval-circle.png');
  background-size: contain;
  background-position: bottom left;
  background-repeat: no-repeat;
  z-index: 0;
  position: absolute;
  left: 0;
  width: 100%;

  height: 100%;
}

.container-text {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  line-height: 68px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;

  h2 {
    margin: 0;
    line-height: 1.05;
    font-size: 3.5rem;
  }
}

.text-paragraph {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin: 1.5rem 0 2.5rem;
}

.See-product {
}

.See-product button {
  height: 46px;
  font-family: 'Manrope';
  font-style: normal;
  border: none;
  padding: 10px;
  background: #333;
  width: 150px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
}

.small-speaker {
}

.small-speaker img {
  border-radius: 8px;
}

.zx-text {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
}

.see-button-container {
}

button {
  background: none;
  border: 1.5px solid #000000;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  width: 160px;
  height: 40px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
}

/* Styles for Second Section */
.second-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-section .custom-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-grid {
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-gap: 60px;
}

.custom-left img {
}

.custom-right {
  background-color: #f1f1f1;

  border-radius: 8px;
}

.custom-right h2 {
  margin: 100px 90px 0px 90px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
}

.custom-right button {
  display: block;
  width: 160px;
  height: 48px;
  margin: 50px 90px 0px 94px;
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
