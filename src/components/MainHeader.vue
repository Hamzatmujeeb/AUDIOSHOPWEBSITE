<script setup></script>

<template>
  <div class="main-header__wrapper">
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
    <section class="container">
      <div>
        <h2 class="new-product-text">NEW PRODUCT</h2>
        <h4>XX99 Mark II <br />Headphones</h4>
        <p>
          Experience natural, lifelike audio and exceptional<br />build quality made for the
          passionate music<br />enthusiast.
        </p>
        <div class="see-product">
          <button>See Product</button>
        </div>
      </div>
      <img src="@/assets/images/black-headphone.png" alt="headphone" class="headphone-image" />
    </section>
  </div>
</template>

<style scoped>
/* Main header styles */
header {
  color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.main-header__wrapper {
  background: #141414;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 143px;
  height: 25px;
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
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
}

.cart-logo {
  width: 1.458rem;
  height: 0.989rem;
  background: none;
  justify-self: end;
}

.hr-line-conainer {
  width: 1.458rem;
  height: 0px;
}
.hr-line-conainer img {
  width: 1380px;
  height: 1px;
  flex-shrink: 2;
  margin-left: 125px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3.04rem;
}
.headphone-image {
  object-fit: contain;
  margin: 0 auto;
  mix-blend-mode: lighten;
  scale: 1.2;
  position: relative;
  top: -4.98rem;
}

.new-product-text {
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.188rem;
  letter-spacing: 0.625rem;
  text-transform: uppercase;
  color: #ffffff;
}

h4 {
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  /* or 104% */
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}

p {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */
  color: #ffffff;
}

.see-product {
  border: none;
  outline: none;
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
  background: #d87d4a;
  padding: 10px 20px 30px 20px;
  height: 10px;
  color: #ffffff;
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
