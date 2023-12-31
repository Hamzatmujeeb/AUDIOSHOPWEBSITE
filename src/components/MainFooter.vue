<template>
    <footer>
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
        <p class="footer-description">Audiophile is an all in one stop to fulfill your audio needs. We're a small team<br>
          of music lovers and sound specialists who are devoted to helping you get the 
          <br>most out of personal audio. Come and visit our demo facility - we’re open 7
          <br> days a week.
        </p>
        <div class="footer-social-media">
          <a href="#"><img src="@/assets/images/twitter.png" alt="Twitter"></a>
          <a href="#"><img src="@/assets/images/facebook.png" alt="Facebook"></a>
          <a href="#"><img src="@/assets/images/instagram.png" alt="Instagram"></a>
        </div>
        <p class="footer-copy-right">&copy; 2023 Audiophile. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <style>
    footer {
      position: absolute;
      width: 95.10%;
      height: 365px;
      left: 10px;
      top: 3890px;
      background: #000;
      color: #fff;
      padding: 30px;
      display: flex;
      align-items: center;
    }
    footer .footer-container {
    display: flex; /* Enable Flexbox */
    justify-content: space-between; /* Distribute elements with spacing */
    align-items: center; /* Vertical alignment */
    flex-wrap: wrap;
  }

  
  footer .footer-logo img {
      position: absolute;
      left: 10%;
      right: 0%;
      top: 10%;
      bottom: 0%;
    }
  
    footer .footer-nav ul {
      list-style: none;
      margin: -170px 77%;
      padding: 0;
    }
  
    footer .footer-nav li {
      display: inline;
      margin: 57px;
    }
  
    .footer-nav a {
      text-decoration: none;
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 25px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #FFFFFF;
    }
    footer .footer-description {
    text-align: left; /* Align text to the left */
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    width: 50%; /* Adjust width if needed */
    position: absolute;
    left: 10%;
    top: 120px; /* Adjust top positioning */
  }
  
    footer .footer-social-media {
      position: absolute;
      top: 210px;
      width: 24px;
      height: 24px;
      left: 72%;
      display: flex;
      align-items: center;
    }
  
    footer .footer-social-media a {
      color: #fff;
      margin: 15px;
    }
  
    footer .footer-social-media a:hover {
      color: #aaa;
    }
  
    .footer-social-media i {
      font-size: 24px;
    }
  
    footer .footer-copy-right {
      position: absolute;
      top: 79%;
      bottom: 0%;
      left: 10%;
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 25px;
      color: #FFFFFF;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
  </style>
  