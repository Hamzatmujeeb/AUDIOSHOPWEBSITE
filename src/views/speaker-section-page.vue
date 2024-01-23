<script setup>

</script>

<template>
<div class="body-style">
  <!--Header Section-->
 <div class="header__wrapper__speaker">
    <h1 class="header-speaker-text">SPEAKERS</h1>
 </div>
 <div class="IIHeadphones-container">
      <div class="IIHeadphones-column-1">
        <img src="@/assets/images/product-speaker.png" alt="black-head-phone" />
      </div>
      <div class="IIHeadphones-column-2">
        <h2>NEW PRODUCT</h2>
        <h1>ZX9<br>SPEAKER</h1>
        <P>Upgrade your sound system with the all new ZX9 active<br> speaker. 
            It’s a bookshelf speaker system that offers truly<br> wireless connectivity -- creating new possibilities for more<br> pleasing and practical audio setups.</P>
        <button class="see-product-button">See Product</button>
      </div>
    </div>
    <div class="IIHeadphones-container">
      <div class="IIHeadphones-column-ZX7">
        <h1>ZX7<br>SPEAKER</h1>
        <P class="IIHeadphones-column-ZX7-paragraph">Stream high quality sound wirelessly with minimal loss. The ZX7<br> bookshelf speaker uses high-end audiophile 
            components that<br> represents the top of the line powered speakers for home or<br> studio use.</P>
        <button class="see-product-button">See Product</button>
      </div>
      <div class="IIHeadphones-column-1">
        <img src="@/assets/images/mini-speaker.png" alt="black-head-phone" />
      </div>
    </div>
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
          <h2>SPEAKERS</h2>
          <div class="shop-container">
            <p class="shop">Shop</p>
            <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button">
          </div>
        </div>
      </div>

      <div class="Section__column">
        <img src="@/assets/images/bluetooth.png" alt="Headphone 3" class="product__img">
        <div class="product__name">
          <h2>EARPHONES</h2>
          <div class="shop-container">
            <p class="shop">Shop</p>
            <img src="@/assets/images/Path 2.jpg" alt="next-button" class="next-button">
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
            <h1 class="column-header-text">Bringing you the<br> <span>best</span> audio gear</h1>
            <p class="column-header-paragraph">Located at the heart of New York City, Audiophile is the premier<br> store for high end headphones, earphones, 
                speakers, and audio<br>accessories. We have a large showroom and luxury<br> 
                demonstration rooms available for you to browse and <br>experience a wide range of our products. 
                Stop by our store to<br> meet some of the fantastic people who make Audiophile the<br> best place to buy your portable audio equipment.</p>
        </div>
        <div class="main-contact-container-column">
            <img src="@/assets/images/john.png" alt="John"> 
        </div>
      </div>
    </div>
</main>

<!--Footer Html-->
 
</div>
</template>

<style scoped>
 .body-style{
    background: #FAFAFA;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Manrope;
 }

.header__wrapper__speaker .header-speaker-text{
  background: #000;
    color: #fff;
    text-align: center;
    margin:0;
    padding: 8.44rem;
    font-family: Manrope;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.75rem; /* 110% */
    letter-spacing: 0.08931rem;
   text-transform: uppercase
}

/*Headphone styles */
.IIHeadphones-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 69.375rem;
  margin: 10.75rem 10rem 0 18.75rem; /* top right bottom left */
  gap: 13.5rem;
}

.IIHeadphones-container .IIHeadphones-column-1{
    background: #F1F1F1;
    width: 33.75rem;
    height: 35rem;
    margin-left :-5rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    opacity: 1;
}

.IIHeadphones-container .IIHeadphones-column-1 img{
    width: 25.82738rem;
    height: 24.125rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top:100px;
    object-fit:contain;
    z-index: 1;
}

.IIHeadphones-container .IIHeadphones-column-2{
    width: 27.8125rem;
    height: 21.4375rem;
    flex-shrink: 0;
}

 .IIHeadphones-column-2 h2{
    margin-top: 5.81rem;
    color: #D87D4A;
    font-family: Manrope;
    font-size: 0.875rem;
    font-style: normal;
   font-weight: 400;
   line-height: normal;
   letter-spacing: 0.625rem;
   text-transform: uppercase;
}

.IIHeadphones-column-2 h1{
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

.IIHeadphones-column-2 p{
    width: 27.8125rem;
    color: #000;
    font-family: Manrope;
   font-size: 0.9375rem;
   font-style: normal;
   font-weight: 500;
   line-height: 1.5625rem;
   opacity: 0.5;
}

.IIHeadphones-column-2  .see-product-button {
    background: #D87D4A;
    width: 10rem;
    height: 3rem;
    border: none;
    margin-top: 2rem;
    color: #FFF;
   font-family: Manrope;
   font-size: 0.8125rem;
   font-style: normal;
   font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  cursor: pointer;
}

.IIHeadphones-column-ZX7{
    margin-left: -3rem;
    margin-top: 6rem;
}

.IIHeadphones-column-ZX7 h1{
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

.IIHeadphones-column-ZX7 img{
    margin-right: 14rem;
}

.IIHeadphones-column-ZX7 .IIHeadphones-column-ZX7-paragraph{
    width: 27.8125rem;
    color: #000;
    font-family: Manrope;
   font-size: 0.9375rem;
   font-style: normal;
   font-weight: 500;
   line-height: 1.5625rem;
   opacity: 0.5;
}

.IIHeadphones-column-ZX7 .see-product-button {
    background: #D87D4A;
    width: 10rem;
    height: 3rem;
    border: none;
    margin-top: 2rem;
    color: #FFF;
   font-family: Manrope;
   font-size: 0.8125rem;
   font-style: normal;
   font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  cursor: pointer;
}

.section__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA; 
  height: 45rem;
}

.section__wrapper__container {
  display: flex;
  justify-content: space-around; 
  width: 75rem;
  gap: 3rem;
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

/*Contact style */
.main-contact-section{
    background: #FAFAFA;
}

.main-contact-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    justify-content: center;
    margin: 0 9rem 0 14.86rem;
    gap: -3rem;
}

 .main-contact-container .main-contact-container-column{
    width: 37.375rem;
   height: 36.75rem;
}

.main-contact-container-column .column-header-text{
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

.column-header-text span{
    color: #D87D4A;
}

.main-contact-container-column .column-header-paragraph{
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

.main-contact-container-column img{
    width: 33.75rem;
    height: 36.75rem;
    border-radius: 0.5rem;
    flex-shrink: 0;
}

/**Footer style */
.footer-wrapper{
    background: #000;
    height: 22.8125rem;
    margin-top: 13rem;
}

footer{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo img {
    width: 8.9375rem;
    height: 1.5625rem;
    margin-left:4rem ;
}
footer h4{
    color: #D87D4A;
}

footer nav ul {
  list-style: none;
  padding: 0;
  margin: 2.19rem 0;
}

footer nav li {
  display: inline;
  margin: 2.4rem;
}

footer nav a {
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
}

footer .footer-text{
    width: 33.75rem;
    color: #Ffff;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5625rem;
    margin-top: 2.5rem;
    margin-left: 4rem;
    opacity: 0.5;
}

.footer-social-media{
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  gap: 1.766rem;
  margin-left: 27rem;
  z-index: 3;
  fill: #FFF;
  cursor: pointer;
  margin-top: 1.966rem;
}
footer .copy-right{
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