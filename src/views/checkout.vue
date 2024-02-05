<template>
    <div class="go-back">
      <!-- Go back -->
      <h3>Go Back</h3>
    </div>
      <div class="main-body-wrapper">
        <div class="body-wrapper-container">
          <div class="column-1">
            <h1 class="checkout-heading">Checkout</h1>
            <!-- Your content for the first column -->
          </div>
          <div class="column-2">
            <!-- Your content for the second column -->
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    // Your component logic goes here
  };
  </script>
  
  <style scoped>
  /* Go back style */
  .go-back {
    margin: 0 0 1rem 13rem;
    padding-top: 2rem;
    color: #000;
    font-size: 0.9375rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5625rem; /* 166.667% */
    opacity: 0.5;
  }
  
  /* Two-column grid */
  .body-wrapper-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px; /* Adjust the gap as needed */
    margin: 60px;
  }
  
  /* Style for the first column */
  .column-1 {
     background: #F2F2F2;
     width: 730px;
     height: 1126px;
     margin-left: 200px;
     opacity: 0.9;

  }
  
  /* Style for the second column */
  .column-2 {
    width: 350px;
    height: 612px;
    background: #F2F2F2;
    opacity: 0.9;
  }
  </style>
  