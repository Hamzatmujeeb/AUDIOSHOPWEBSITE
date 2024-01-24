<script setup>
const switchHeaders = () => {
  isHeader1.value = !isHeader1.value;
  isHeader2.value = !isHeader2.value;
  // Toggle between Home and Headphones pages
  const nextRoute = isHeader1.value ? '/' : '/headphone-page';
  router.push(nextRoute);
};
</script>

<template>
  <div class="main-header__wrapper">
    <header :class="{ 'header1': isHeader1, 'header2': isHeader2 }">
      <div class="logo">
        <img src="@/assets/images/audiophile.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/headphone-page">Headphones</router-link></li>
          <li><router-link to="/speaker-page">Speakers</router-link></li>
          <li><router-link to="/earphone-page">Earphones</router-link></li>
          <li><router-link to="/product-details-headphone">PDH</router-link></li>
        </ul>
      </nav>
      <div class="cart-logo">
        <img src="@/assets/images/cart2-icon.png" alt="Logo" />
      </div>
    </header>
  </div>
</template>

<style scoped>
/* Add this to change the header color when on specific pages */
/* Add this to change the header color when on specific pages */
body.route-Home .main-header__wrapper header {
   background: #141414;; /* Set the background color for the first header */
   width: 100%; /* Maintain the same width as the header-wrapper */
}

body.route-Headphones .main-header__wrapper header,
body.route-Earphones .main-header__wrapper header,
body.route-Speakers .main-header__wrapper header,
body.route-ProductDetailsHeadphone .main-header__wrapper header{
   background: #000; /* Set the background color for the second header and other applicable pages */
   width: 100%; /* Maintain the same width as the header-wrapper */
}


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
  pointer-events: none;
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
  margin-top: 1.5rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #d87d4a;
  border: none;
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
