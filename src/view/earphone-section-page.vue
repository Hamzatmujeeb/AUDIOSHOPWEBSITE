<script>

</script>

<template>
<!--Body Wrapper-->
<div class="body-wrapper">
 <div class="header-wrapper">
  <header>
    <div class="logo">
     <img src="@/assets/images/audiophile.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Headphones</a></li>
          <li><a href="#">Speakers</a></li>
          <li><a href="#">Earphones</a></li> 
        </ul>
      </nav>
      <div class="cart-logo">
        <img src="@/assets/images/cart2-icon.png" alt="Logo" />
      </div>
    </header>
    <h1 class="header-text">EARPHONES</h1>
  </div>
 </div>
 <!--Speakers section-->
 <div class="IIHeadphones-container-earphone">
      <div class="IIHeadphones-earphone-column-1">
        <img src="@/assets/images/bluetooth2.png" alt="black-head-phone" />
      </div>
      <div class="IIHeadphones-earphone-column-2">
        <h2>NEW PRODUCT</h2>
        <h1>ZX9<br>SPEAKER</h1>
        <P>Upgrade your sound system with the all new ZX9 active<br> speaker. 
            It’s a bookshelf speaker system that offers truly<br> wireless connectivity -- creating new possibilities for more<br> pleasing and practical audio setups.</P>
        <button class="see-product-button-earphone">See Product</button>
      </div>
    </div>
 <!--Products Section-->
    <section class="section__wrapper__earphone">
    <div class="section__wrapper__container__earphone">
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
  <!--Contact Section-->
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
<!--Footer Section-->
<div class="footer-wrapper">
    <footer>
        <div class="footer-logo-2">
         <img src="@/assets/images/audiophile.png" alt="Logo">
        </div>
        <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Headphones</a></li>
          <li><a href="#">Speakers</a></li>
          <li><a href="#">Earphones</a></li>
        </ul>
      </nav>
      <h4>Audiophile is an all in one stop to fulfill your audio needs. We're a small team<br>
         of music lovers and sound specialists who are devoted to helping you get the<br> most out of personal 
         audio. Come and visit our demo facility - we’re open 7<br> days a week.</h4>
      <div class="footer-social-media">
        <a href="#"><img src="@/assets/images/twitter.png" alt="Twitter"></a>
        <a href="#"><img src="@/assets/images/facebook.png" alt="Facebook"></a>
        <a href="#"><img src="@/assets/images/instagram.png" alt="Instagram"></a>
    </div>

    <P class="copy-right">Copyright 2021. All Rights Reserved</P>
    </footer>
</div>
</template>

<style scoped>
 body {
      margin: 0;
      font-family: 'Manrope', sans-serif;
    }

    /* Header styles */
    .header-wrapper {
      background: #000;
      height: 21rem;
    }

    header {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      margin: 0 auto;
      max-width: 1440px;
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
      color: #FFF;
      font-size: 0.8125rem;
      font-weight: 700;
      line-height: 1.5625rem;
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

    /* Speakers Section */
    .header-wrapper .header-text {
      color: #fff;
      text-align: center;
      margin-top: 6.44rem;
      margin-bottom: 6.06rem;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 2.75rem;
      letter-spacing: 0.08931rem;
      text-transform: uppercase;
    }

    .IIHeadphones-container-earphone {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 69.375rem;
      margin: 10.75rem 10rem 0 16.75rem;
      gap: 13.5rem;
    }

    .IIHeadphones-container-earphone .IIHeadphones-earphone-column-1 {
      background: #F1F1F1;
      width: 33.75rem;
      height: 35rem;
      margin: 0;
      flex-shrink: 0;
      border-radius: 0.5rem;
    }

    .IIHeadphones-earphone-column-1 img {
      width: 26.3125rem;
      height: 24.125rem;
      margin-left: auto;
      margin-right: auto;
      display: block;
      margin-top: 100px;
      object-fit: contain;
      z-index: 1;
    }

    .IIHeadphones-container-earphone .IIHeadphones-earphone-column-2 {
      width: 27.8125rem;
      height: 21.4375rem;
      flex-shrink: 0;
    }

    .IIHeadphones-container-earphone .IIHeadphones-earphone-column-2 h2 {
      margin-top: 5.81rem;
      color: #D87D4A;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.625rem;
      text-transform: uppercase;
    }

    .IIHeadphones-container-earphone .IIHeadphones-earphone-column-2 h1 {
      width: 27.8125rem;
      color: #000;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 2.75rem;
      letter-spacing: 0.08931rem;
      text-transform: uppercase;
    }

    .IIHeadphones-container-earphone .IIHeadphones-earphone-column-2 p {
      width: 27.8125rem;
      color: #000;
      margin-top: 2rem;
      font-size: 0.9375rem;
      font-weight: 500;
      line-height: 1.5625rem;
      opacity: 0.5;
    }

    .IIHeadphones-container-earphone .IIHeadphones-earphone-column-2 .see-product-button-earphone {
      width: 10rem;
      height: 3rem;
      flex-shrink: 0;
      margin-top: 2rem;
    }

    button {
      background: #D87D4A;
      border: none;
      color: #FFF;
      font-size: 0.8125rem;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.0625rem;
      text-transform: uppercase;
    }

    /* Products Section */
    .section__wrapper__earphone {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FAFAFA;
      height: 40rem;
    }

    .section__wrapper__container__earphone {
      display: flex;
      justify-content: space-around;
      width: 80rem;
    }

    .section__wrapper__container__earphone .Section__column {
      flex: 0 0 calc(30% - 10px);
      height: 15.75rem;
      width: 15.875rem;
      text-align: center;
      background: #F1F1F1;
      border-radius: 0.5rem;
    }

    .section__wrapper__container__earphone .Section__column .product__img {
      position: relative;
      flex: 0 0 calc(30% - 5px);
      top: -70px;
      z-index: 1;
      width: 11.125rem;
      height: 10.0625rem;
      flex-shrink: 0;
      object-fit: contain;
    }

    .Section__column .product__name {
      position: relative;
    }

    .Section__column .shop-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .Section__column .product__name h2 {
      margin-top: -15px;
      color: #000;
      text-align: center;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.08038rem;
      text-transform: uppercase;
    }

    p.shop {
      color: #000;
      margin-top: 11px;
      font-size: 0.8125rem;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.0625rem;
      text-transform: uppercase;
      opacity: 0.5;
    }

    /* Contact */
    .main-contact-section {
      background: #FAFAFA;
    }

    .main-contact-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
      margin: 0 9rem 0 14.86rem;
      gap: -3rem;
    }

    .main-contact-container .main-contact-container-column {
      width: 37.375rem;
      height: 36.75rem;
    }

    .main-contact-container-column .column-header-text {
      width: 27.8125rem;
      margin-top: 9rem;
      color: #000;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 2.75rem;
      letter-spacing: 0.08931rem;
      text-transform: uppercase;
    }

    .column-header-text span {
      color: #D87D4A;
    }

    .main-contact-container-column .column-header-paragraph {
      color: #000;
      width: 27.8125rem;
      font-size: 0.9375rem;
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

    /* Footer */
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
      color: #FFF;
      font-size: 0.8125rem;
      font-weight: 700;
      line-height: 1.5625rem;
      letter-spacing: 0.125rem;
      text-transform: uppercase;
      cursor: pointer;
    }

    footer h4 {
      width: 33.75rem;
      color: #Ffff;
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
      fill: #FFF;
      cursor: pointer;
      margin-top: 1.966rem;
    }

    footer .copy-right {
      color: #fff;
      font-size: 0.9375rem;
      font-weight: 700;
      line-height: 1.5625rem;
      margin-top: 3rem;
      margin-left: 4rem;
      opacity: 0.5;
    }
    
</style>