<script setup>
  prompt("What is your name?");
</script>

<template>
  <div>
    <header>
      <div class="logo">
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
      <div class="cart-logo">
        <img src="@/assets/images/cart2-icon.png" alt="Logo">
      </div>
    </header>
    <div class="hr-line-conainer">
      <img src="@/assets/images/hr-line.png" alt="Logo" class="hr-line">
    </div>
    <div class="container">
      <h2 class="new-product-text">NEW PRODUCT</h2>
      <h4>XX99 Mark II <br />Headphones</h4>
      <p>Experience natural, lifelike audio and exceptional<br />build quality made for the passionate music<br />enthusiast.</p>
      <div class="see-product">
        <button>See Product</button>
      </div>
      <img src="@/assets/images/black-headphone.png" alt="headphone" class="headphone-image" />
    </div>
  </div>
</template>

<style scoped>
   header {
    background-color: #000;
    color: #fff;
    padding: 1.875rem;
    display: flex;
    align-items: center;
    max-width: 99.450%;
    overflow: hidden;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 143px;
    height: 25px;
    margin-left: 100px;
  }

  nav ul {
    list-style: none;
    margin: 1.863rem 15.87rem;
    padding: 0;
  }

  nav li {
    display: inline;
    margin: 2.40rem;
  }

  nav a {
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

  .cart-logo {
    position: absolute;
    width: 1.458rem;
    height: 0.989rem;
    left: 89.281rem;
    top: 4.313rem;
    background: none;
  }

.hr-line-conainer{
  width: 1.458rem;
  height: 0px;
  background: #000;
}
.hr-line-conainer img {
  width: 1380px;
  height: 1px;
  flex-shrink:2 ;
  margin-left: 125px;
}

.container {
    background: #000;
    max-width:99.456;
    height: 729px;
    flex-shrink: 0;
    padding-top: 70px;
  }
.headphone-image {
  width: 708.8px;
  height: 656px;
  flex-shrink: 0;
  margin-left: 40.75rem;
  background: transparent;
   object-fit: contain;
  }
   
  .new-product-text {
   position: absolute;
   height: 1.188rem;
   left: 9.190rem;
   right:0rem;
   top: calc(60% - 19px/2 - 163.5px);
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 400;
   font-size: 0.875rem;
   line-height:1.188rem;
   letter-spacing:0.625rem;
   text-transform: uppercase;
   color: #FFFFFF;
   mix-blend-mode: normal;
   opacity: 0.5;
  }

  h4 {
    position: absolute;
    height: 7.25rem;
    left: 9.190rem;
    right: 0.5rem;
    top: calc(54% - 116px/2 - 72px);
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 58px;
    /* or 104% */
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  p {
    position: absolute;
    left:9.190rem;
    right: 12.31%;
    top: 63.89%;
    bottom: 25.43%;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */
    color: #FFFFFF;
    mix-blend-mode: normal;
     opacity: 0.75;
  }

  .see-product{    
   position: absolute;
   left:9.190rem;
   right: 0%;
   top: 85%;
   bottom: 0%;
   border: none;
   outline:none;
   background: none;
}

 button {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #D87D4A;
  padding: 10px 20px 30px 20px;
  height: 10px;
  color: #FFFFFF;
  cursor: pointer;
}

@media screen and (max-width: 75rem) {
    /* For tablet screens */
    header {
      width: 50rem;
      margin: 0 auto;
    }

    nav ul {
      margin: 0;
    }

    nav li {
      margin: 1.25rem;
    }
  }

  @media screen and (max-width: 275px) {
  /* For phone screens */
  header {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 1.25rem;
  }

  .logo img {
    margin: 0.234rem 8rem;
    width: 8.938rem;
  }

  nav {
    margin-top: 3.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  nav li {
    margin: 0.625rem;
  }

  .cart-logo {
    width: 1.438rem;
    margin-top: 0.625rem;
    margin-left: 8rem; /* Added to align with the logo */
  }
}
  
</style>
