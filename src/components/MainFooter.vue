<template>
  <footer class="footer__wrapper">
    <div class="footer-container">
      <div class="footer-logo">
        <img src="@/assets/images/audiophile.png" alt="Logo">
      </div>

      <nav class="footer-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">HEADPHONES</a></li>
          <li><a href="#">SPEAKERS</a></li>
          <li><a href="#">EARPHONES</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-content">
      <h5>Audiophile is an all in one stop to fulfill your audio needs.
         We're a small team<br> of music lovers and sound specialists who are devoted to helping
         you get the<br> most out of personal audio. Come and visit our demo facility - we’re open 7<br> days a week.</h5>
    </div>
    <div class="footer-social-media">
        <a href="#"><img src="@/assets/images/twitter.png" alt="Twitter"></a>
        <a href="#"><img src="@/assets/images/facebook.png" alt="Facebook"></a>
        <a href="#"><img src="@/assets/images/instagram.png" alt="Instagram"></a>
    </div>
    <p class="copy-right">Copyright 2021. All Rights Reserved</p>
  </footer>
</template>

<style scoped>
.footer__wrapper {
  background: #101010; 
}

footer {
  position: absolute;
  top: 3900px;
  color: #fff;;
  display: flex;;
  flex-direction: column; 
  align-items: center;
  width:104.3879rem; 
}

.footer-container {
  display: grid;
  grid-template-columns: auto 1fr; 
  align-items: center;
  gap: 1.25rem; 
  margin-top: 4.69rem;
}

footer .footer-logo img {
  width: 8.9375rem;
  height: 1.5625rem;
  margin-right: 31rem;
  flex-shrink: 0;
}

footer .footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0; 
  display: flex; 
}

footer .footer-nav li {
  margin: 0 1.25rem; 
}

.footer-nav a {
  color: #FFF;
  font-family: Manrope;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5625rem; /* 192.308% */
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  text-decoration: none;
}

footer .footer-content{
  width: 33.75rem;
  margin:2.2rem 45.95rem 0 8em ;
  color: #FFF;
  font-family: Manrope;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem; /* 166.667% */
  opacity: 0.5;
}

footer .copy-right{
  width: 33.75rem;
  text-align: left;
  margin-right: 49.4rem;
  margin-left: 10.31rem;
  margin-top: 3.5rem;
  margin-bottom: 3rem;
  color: #FFF;
  font-family: Manrope;
  font-size: 0.9375rem;
  font-style: normal;
 font-weight: 700;
 line-height: 1.5625rem;
 opacity: 0.5;
}

.footer-social-media{
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-left: 46.12rem;
  margin-right: -1.31rem;
  z-index: 3;
  fill: #FFF;
  cursor: pointer;
  margin-top: -3.866rem; 
}
</style>
