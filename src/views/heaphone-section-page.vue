<script setup></script>

<template>
  <div class="body-style">
    <!--Header Section-->
    <div class="header__wrapper">
      <h1 class="header-text">HEADPHONES</h1>
    </div>
    <!--XX99 Mark IIHeadphones-->
    <section>
      <div class="IIHeadphones-container">
        <div class="IIHeadphones-column-1">
          <img src="@/assets/images/blackheadphone2.png" alt="black-head-phone" />
        </div>
        <div class="IIHeadphones-column-2">
          <h2>NEW PRODUCT</h2>
          <h1>XX99 Mark II<br />Headphones</h1>
          <P
            >The new XX99 Mark II headphones is the pinnacle of pristine<br />audio. It redefines
            your premium headphone experience by<br />reproducing the balanced depth and precision
            of studio-quality<br />sound</P
          >
          <button class="see-product-button">See Product</button>
        </div>
      </div>
      <div class="IIHeadphones-container">
        <div class="IIHeadphones-column-2">
          <h1 class="XX99-Mark-I">XX99 Mark I<br />Headphones</h1>
          <P
            >As the gold standard for headphones, the classic XX99 Mark<br />
            I offers detailed and accurate audio reproduction for <br />audiophiles, mixing
            engineers, and music aficionados alike in<br />
            studios and on the go.</P
          >
          <button class="see-product-button">See Product</button>
        </div>
        <div class="IIHeadphones-column-1">
          <img src="@/assets/images/headphone2.png" alt="white-head-phone" />
        </div>
      </div>
      <div class="IIHeadphones-container">
        <div class="IIHeadphones-column-1">
          <img src="@/assets/images/white-headphone.png" alt="white-head-phone" />
        </div>
        <div class="IIHeadphones-column-2">
          <h1 class="XX99-Mark-I">XXX59</h1>
          <P
            >Enjoy your audio almost anywhere and customize it to your<br />
            specific tastes with the XX59 headphones. The stylish yet<br />
            durable versatile wireless headset is a brilliant companion at<br />
            home or on the move.</P
          >
          <button class="see-product-button">See Product</button>
        </div>
      </div>
    </section>
    <!--Speakers section-->
    <section class="section__wrapper">
      <div class="section__wrapper__container">
        <div class="Section__column">
          <img src="@/assets/images/headphone.png" alt="Headphone 1" class="product__img" />
          <div class="product__name">
            <h2>HEADPHONES</h2>
            <div class="shop-container">
              <p class="shop">Shop</p>
              <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button" />
            </div>
          </div>
        </div>

        <div class="Section__column">
          <img src="@/assets/images/product-speaker.png" alt="Headphone 2" class="product__img" />
          <div class="product__name">
            <h2>HEADPHONES</h2>
            <div class="shop-container">
              <p class="shop">Shop</p>
              <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button" />
            </div>
          </div>
        </div>

        <div class="Section__column">
          <img src="@/assets/images/bluetooth.png" alt="Headphone 3" class="product__img" />
          <div class="product__name">
            <h2>HEADPHONES</h2>
            <div class="shop-container">
              <p class="shop">Shop</p>
              <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Conatct Section-->
    <main>
      <div class="main-contact-section">
        <div class="main-contact-container">
          <div class="main-contact-container-column">
            <h1 class="column-header-text">
              Bringing you the<br />
              <span>best</span> audio gear
            </h1>
            <p class="column-header-paragraph">
              Located at the heart of New York City, Audiophile is the premier<br />
              store for high end headphones, earphones, speakers, and audio<br />accessories. We
              have a large showroom and luxury<br />
              demonstration rooms available for you to browse and <br />experience a wide range of
              our products. Stop by our store to<br />
              meet some of the fantastic people who make Audiophile the<br />
              best place to buy your portable audio equipment.
            </p>
          </div>
          <div class="main-contact-container-column">
            <img src="@/assets/images/john.png" alt="John" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.body-style {
  background: #fafafa;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Manrope;
}
/**Header style */
.header__wrapper {
  background: #000;
  padding: 6.125rem 0;
}

header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 8.9375rem;
  height: 1.5625rem;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 2.19rem 0;
}

nav li {
  display: inline;
  margin: 2.4rem;
}

nav a {
  color: #fff;
  font-family: Manrope;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem; /* 192.308% */
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  text-decoration: none;
}

.cart-logo {
  width: 1.458rem;
  height: 0.989rem;
  background: none;
  justify-self: end;
}

.header__wrapper h1 {
  color: #fff;
  text-align: center;
  padding: 6.125rem auto;
  margin: 0;
  font-family: Manrope;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.75rem; /* 110% */
  letter-spacing: 0.08931rem;
  text-transform: uppercase;
}

/*Headphone styles */
.IIHeadphones-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 69.375rem;
  margin: 10.75rem 10rem 0 16.75rem; /* top right bottom left */
  gap: 13.5rem;
}

.IIHeadphones-container .IIHeadphones-column-1 {
  background: #f1f1f1;
  width: 33.75rem;
  height: 35rem;
  margin: 0;
  flex-shrink: 0;
  border-radius: 0.5rem;
}

.IIHeadphones-container .IIHeadphones-column-1 img {
  width: 21.82738rem;
  height: 24.125rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 100px;
  object-fit: contain;
  z-index: 1;
}

.IIHeadphones-container .IIHeadphones-column-2 {
  width: 27.8125rem;
  height: 21.4375rem;
  flex-shrink: 0;
}

.IIHeadphones-column-2 h2 {
  margin-top: 5.81rem;
  color: #d87d4a;
  font-family: Manrope;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.625rem;
  text-transform: uppercase;
}

.IIHeadphones-column-2 h1 {
  width: 27.8125rem;
  color: #000;
  font-family: Manrope;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.75rem; /* 110% */
  letter-spacing: 0.08931rem;
  text-transform: uppercase;
}

.IIHeadphones-column-2 p {
  width: 27.8125rem;
  color: #000;
  font-family: Manrope;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem;
  opacity: 0.5;
}

.IIHeadphones-column-2 .see-product-button {
  background: #d87d4a;
  width: 10rem;
  height: 3rem;
  border: none;
  margin-top: 2rem;
  color: #fff;
  font-family: Manrope;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  cursor: pointer;
}

.XX99-Mark-I {
  margin-top: 7rem;
}
/*Speakers style */
.section__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  height: 40rem;
  margin-top: 8rem;
}

.section__wrapper__container {
  display: flex;
  justify-content: space-around;
  width: 70.375rem;
  height: 17.75rem;
  gap: 4rem;
  margin-left: 9rem;
  margin-right: 10rem;
}

.Section__column {
  flex: 0 0 calc(30% - 10px);
  width: 10.875rem;
  height: 15.75rem;
  text-align: center;
  background: #f1f1f1;
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

.shop {
  color: #000;
  margin-top: 12px;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  opacity: 0.5;
}

/*Contact style */
.main-contact-section {
  background: #fafafa;
}

.main-contact-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 0 9rem 0 17.86rem;
  gap: -1rem;
}

.main-contact-container .main-contact-container-column {
  width: 37.375rem;
  height: 36.75rem;
}

.main-contact-container-column .column-header-text {
  width: 27.8125rem;
  margin-top: 9rem;
  color: #000;
  font-family: Manrope;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.75rem; /* 110% */
  letter-spacing: 0.08931rem;
  text-transform: uppercase;
}

.column-header-text span {
  color: #d87d4a;
}

.main-contact-container-column .column-header-paragraph {
  color: #000;
  width: 27.8125rem;
  font-size: 0.9375rem;
  font-style: normal;
  font-family: Manrope;
  font-weight: 500;
  margin-top: 2.5rem;
  opacity: 0.5;
  line-height: 1.5625rem;
}

.main-contact-container-column img {
  width: 33.75rem;
  height: 36.75rem;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.footer-wrapper {
  background: #000;
  margin-top: 10rem;
  height: 22.8125rem;
}

.footer-wrapper footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 10rem auto;
  max-width: 1440px;
}
footer .footer-logo-2 {
  width: 8.9375rem;
  height: 1.5625rem;
  margin-left: 4rem;
}

footer nav ul {
  list-style: none;
  padding: 0;
  margin: 2.19rem 0;
}

footer li {
  margin: 2.4rem;
}

footer li a {
  color: #fff;
  font-family: Manrope;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem; /* 192.308% */
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  cursor: pointer;
}

footer h4 {
  width: 33.75rem;
  color: #ffff;
  font-size: 0.8999rem;
  font-weight: 500;
  line-height: 1.5625rem;
  margin-top: 2.5rem;
  margin-left: 4rem;
  opacity: 0.5;
}

.footer-social-media {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  gap: 2rem;
  margin-left: 25rem;
  z-index: 3;
  fill: #fff;
  cursor: pointer;
  margin-top: 1.966rem;
}
footer .copy-right {
  color: #fff;
  font-family: Manrope;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem;
  margin-top: 3rem;
  margin-left: 4rem;
  opacity: 0.5;
}
</style>
