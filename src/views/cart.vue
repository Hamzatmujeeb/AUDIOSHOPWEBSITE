<script>

</script>
<template>
<body>
 <div class="go-back">
  <!--Go back-->
  <h3>Go Back</h3>
 </div>
 <section>
    <div class="XXX9-wrapper">
      <div class="XXX9-wrapper-container">
        <div class="XXX9-container-column-one">
          <img src="@/assets/images/blackheadphone2.png" alt="Logo" />
          <div class="oval-circle"></div>
        </div>
        <div class="XXX9-container-column-two">
          <h4 class="new-product">NEW PRODUCT</h4>
          <h1 class="XXX9-header">XX99 Mark I<br>Headphones</h1>
          <p class="XXX9-text">As the gold standard for headphones, the classic XX99 Mark I<br> offers detailed and accurate audio reproduction for<br> audiophiles, mixing engineers, and music aficionados alike in<br> studios and on the go. </p>
          <h3 class="price">$ 2,999</h3>
          <div class="XXX9-buttons">
            <button class="number-button">+&nbsp;<span class="one">1</span>&nbsp;-&nbsp;</button> <button class="cart-button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
  <!--Features--section-->
  <div class="feature-wrapper">
      <div class="features-wrapper-container">
        <div class="features-container-column-one">
          <h1 class="features-in-box-text">FEATURES</h1>
        </div>
        <div class="features-container-column-two">
          <h1 class="features-in-box-text">in the box</h1>
        </div>
      </div>
    </div>
  </section>
  <!--Cart section-->
<!-- Cart section -->
<div class="cart-section">

<div class="cart-wrapper-container">
  <div class="column">
    <h2 class="cart-text">cart (3)</h2>
  </div>
  <div class="column">
    <h2 class="remove-text">Remove</h2>
  </div>
</div>

<div class="cart-wrapper-container">
  <div class="column">
    <div class="image-background">
      <img src="@/assets/images/cart-black-headphone.png" alt="Logo" />
    </div>
     <div class="product-description">
       <h3 class="xxx9">XX99 MK II</h3>
     </div>
     <p class="price">$ 2,9997</p>
  </div>
  <div class="column">
  <button class="number-column">+&nbsp;<span class="one">1</span>&nbsp;-&nbsp;</button>
</div>
</div>

<div class="cart-wrapper-container">
  <div class="column">
    <div class="image-background">
      <img src="@/assets/images/cart-white-headphone.png" alt="Logo" />
    </div>
    <div class="product-description">
       <h3>YX1</h3>
     </div>
     <p class="price">$ 599</p>
  </div>
  <div class="column">
    <button class="number-column">+&nbsp;<span class="one">2</span>&nbsp;-&nbsp;</button>
  </div>
</div>

<div class="cart-wrapper-container">
  <div class="column">
    <div class="image-background">
      <img src="@/assets/images/cart-iphord.png" alt="Logo" />
    </div>
    <div class="product-description">
       <h3>YX1</h3>
     </div>
     <p class="price">$ 599</p>
  </div>
  <div class="column">
    <button class="number-column">+&nbsp;<span class="one">1</span>&nbsp;-&nbsp;</button>
  </div>
</div>

<div class="cart-wrapper-container">
  <div class="column">
    <h2 class="total">Total</h2>
  </div>
  <div class="column">
    <h2 class="total-price">$ 5,3969</h2>
  </div>
</div>

<button class="cart-shop-button"><router-link to="/checkout">Checkout</router-link></button>
</div>

  </body>
</template>

<style scoped>

body{
    background: #979797;
    margin: 0;
    max-width: 120rem;
    height: 65rem;
    padding: auto;
}


.cart-section {
  position: absolute;
  width: 24.563rem;
  height: 32.5rem;
  left: 66.425rem;
  top: 129px;
  background: #FFFFFF;
  border-radius: 0.453rem;
}
.cart-wrapper-container {
  display: flex;
  justify-content: space-between;
  gap: 8rem;
}

.column {
  flex: 1;
  margin-left: 30px; /* Adjust the margin as needed */
}

.column .cart-text{
  margin-bottom: 2rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
/* identical to box height */
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000; 
}

.xxx9{
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  font-family: 'Manrope';
  font-style: normal;
}
.column .remove-text{ 
  margin-bottom: 2rem;
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 25px;
/* identical to box height, or 167% */
   text-decoration-line: underline;
   color: #000000;
   mix-blend-mode: normal;
   opacity: 0.5;
}

.column .image-background{
  width: 64px;
  height: 64px;
  background: #F1F1F1;
  border-radius: 8px;
  margin-bottom:-4rem;
  margin-left: -2px;
}

 .image-background img{
  margin: 10px 10px 10px 10px;
  width: 38px;
  height: 40px;
  object-fit: contain;
}

.column .product-description{
  position: relative;
  top:-0.921rem;
  left: 5rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
/* identical to box height, or 167% */
   color: #000000;
}
 .column .price{
  position: relative;
  top: -2rem;
  left: 5rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
/* identical to box height, or 179% */
   color: #000000;
   mix-blend-mode: normal;
   opacity: 0.5;
}

/* Updated CSS for the button */
/* Updated CSS for the button with space between characters */
.column .number-column {
 background: #F1F1F1;/* background color */
  border: none;
  color: white;
  width: 96px;
  height: 42px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  gap: 3rem;
  font-size: 16px;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 4px;
  letter-spacing: 2px; /* Adjust the value to add more or less space */
}

.column .number-column:hover {
  background-color:#D87D4A; /* Darker green on hover */
}

.number-column .one{
  color: #000;
}

.column .total{
  margin: 0 0 4px 5px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
/* identical to box height, or 167% */
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  text-transform: uppercase;
}

.column .total-price{
  margin: 0 27px 4px 0;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
  color: #000000;
}

.cart-shop-button {
  margin: 30px 40px 20px 30px;
  border: none;
  width: 333px;
  height: 48px;
  background: #D87D4A;
  color: #FFF;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  list-style: none;
}

.cart-shop-button a {
  text-decoration: none; /* Remove the link text decoration */
  color: inherit; /* Inherit the color from the parent button */
}

/**Go back Style */
.go-back{
  margin:0 0 1rem 13rem;
  padding-top: 2rem;
  color: #000;
  font-size: 0.9375rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem; /* 166.667% */
  opacity: 0.5;
}



.XXX9-wrapper-container {
  display: grid;
  grid-template-columns: auto auto; /* Two columns, adjust as needed */
  gap: 3rem; /* Adjust the gap between columns */
  align-items: center;
  margin-left: 2.3rem;
}

.XXX9-container-column-one  {
  max-width: 100%; /* Ensure the image does not exceed its container */
  width: 33.75rem;
  height: 35rem;
  border-radius: 0.5rem;
  background: #F1F1F1;
  margin-left: 12rem;
  margin-top: 4rem;
  opacity: 0.4;
}

.XXX9-container-column-one img{
  width: 18.49013rem;
  height: 24.0625rem;
  margin-left : auto;
  margin-right: auto;
  display: block;
  margin-top:4.275rem;
  object-fit: contain;
  opacity: 1;
}

.oval-circle{
  display: block;
  margin:auto ;
  width: 16.375rem;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 16.375rem;
  opacity: 0.1521;
  background: #000;
  filter: blur(21.746253967285156px);
}

.XXX9-container-column-two{
  background:none;
  width: 27.8125rem;
  height: 24.0625rem;
  margin-right: 5rem;
}

.XXX9-container-column-two .new-product{
  color: #D87D4A;
  font-family: Manrope;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.625rem;
  text-transform: uppercase;
}
.XXX9-container-column-two .XXX9-header{
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

.XXX9-container-column-two .XXX9-text{
  width: 27.8125rem;
  margin-top: 2rem;
  color: #000;
  font-family: Manrope;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem; /* 166.667% */
  opacity: 0.5;
}

.XXX9-container-column-two .price{
  color: #000;
  margin-top: 2rem;
  font-family: Manrope;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.08038rem;
  text-transform: uppercase;
}

.XXX9-buttons {
    display: flex;
    gap: 10px; /* Adjust the gap between the buttons and the "1" text */
    margin-top: 2.94rem;
  }

  .XXX9-buttons .number-button {
    width: 7.5rem;
    height: 3rem;
    color: #000; /* Black color for the button text */
    background: #F1F1F1; /* Background color for the button */
    font-family: Manrope;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.4625rem;
    text-transform: uppercase;
    opacity: 0.5;
    border: none;
  }

.XXX9-buttons .number-button .one {
    color: #000; /* Black color for "1" text */
    text-align: center;
    font-family: Manrope;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
}
.cart-button{
  background: rgba(216, 125, 74, 1);
  margin-left: 1rem;
  width: 10rem;
  height: 3rem;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-family: Manrope;
  font-size: 0.8125rem;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 letter-spacing: 0.0625rem;
 text-transform: uppercase;
 border: none;
}

.in-box-text{
  display: flex;
  gap: 1.6rem;
}
/**Features style */
.feature-wrapper{
   height: 34.875rem;
   margin: 10rem 0 0 0;
}
.features-wrapper-container {
  display: grid;
  grid-template-columns: auto auto; /* Two columns, adjust as needed */
  gap: 22rem; /* Adjust the gap between columns */
  align-items: center;
  width: 77.375rem;
  margin: 0 2.45rem;
}


.features-wrapper-container .features-container-column-one {
  background:none;
  width: 27.8125rem;
  height: 24.0625rem;
  margin-left: 12rem;
}

.features-container-column-two{
  background:none;
  width: 27.8125rem;
  height: 24.0625rem;
  margin-right: -6rem;
}
 .features-in-box-text{
  width: 27.8125rem;
  color: #000;
  font-family: Manrope;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem; /* 112.5% */
  letter-spacing: 0.07144rem;
  text-transform: uppercase;
}

.features-container-column-one .features-text{
  margin:2rem 0 0 0;
  width: 39.6875rem;
  color: #000;
  font-family: Manrope;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem; /* 166.667% */
  opacity: 0.5;
}

.in-box-text{
  margin: -1.1225rem 0 0 0;
}
 .X-text{
  color: #D87D4A;
  font-family: Manrope;
  font-size: 0.9675rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem; /* 166.667% */
}

.in-box-text h4{
  color: #000;
  font-family: Manrope;
  font-size: 0.9265rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 166.667% */
  opacity: 0.5;
}
/**Gallery Style  */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70rem;
  align-items: center;
  margin: 0 14rem; /* Center the gallery container */
}

.grid-item {
  width: auto;
  height: 37rem;
  gap: 2rem; /* Reduce the gap between grid items */
}

.column-images-one {
  width: 27.8125rem;
  height: 17.5rem;
  border-radius: 4px;
  object-fit: contain;
}

.column-images-two {
  width: 39.6875rem;
  height: 37rem;
  flex-shrink: 0;
  margin-left:6rem; /* Adjust margin as needed */
  border-radius: 0.5rem;
  object-fit: contain;
}

.second-image {
  margin-top: 1.7rem;
}

.main-wrapper {
  margin-top: 10rem;
}

.main-wrapper-header {
  text-align: center;
  margin-top: 12rem;
color: #000;
font-family: Manrope;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: 2.25rem; /* 112.5% */
letter-spacing: 0.07144rem;
text-transform: uppercase;
}

.main-wrapper-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 74rem;
  margin-left: 14rem;
  gap: 70px; /* Adjust the gap between columns */
}

.main-column {
  text-align: center;
}

.images-background {
  margin-top: 3rem;
  width: 21.875rem;
  height: 19.875rem;
  border-radius: 0.5rem;
  background: #F1F1F1;
  flex-shrink: 0;
}

.images-background img{
  width: 9.26906rem;
  height: 12.0625rem;
  margin-top: 4rem;
  margin-bottom: auto;
  object-fit: contain;
}

.head-text {
  margin-top:2.5rem;
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.10713rem;
  text-transform: uppercase;
}

.column-button {
  margin-top: 10px;
}

.column-button{
  margin-top: 2rem;
  width: 10rem;
  height: 3rem;
  flex-shrink: 0;
  background: #D87D4A;
  border: none;
  color: #FFF;
  font-family: Manrope;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
}

/**Other section style */
.section__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA; 
  height: 40rem;
  gap: 10px;
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
    gap: 3rem;
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

</style>