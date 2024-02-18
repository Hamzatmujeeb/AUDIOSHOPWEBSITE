<template>
  <div class="page-container">
    <!-- Go back -->
    <div class="go-back">
      <h3>Go Back</h3>
    </div>

    <!-- Main body wrapper -->
    <div class="main-body-wrapper">
      <div class="body-wrapper-container">
        <!-- Column 1 -->
        <div class="column-1">
          <h1 class="checkout-heading">Checkout</h1>
          <h4 class="billing-details">Billing Details</h4>
          <!-- Billing inputs -->
          <div class="billing-form">
            <form action="">
              <div class="input-grid">
                <div class="name">
                  <p class="form-label">Name</p>
                </div>
                <div class="email">
                  <p class="form-label">Email</p>
                </div>
                <input type="text" class="column" placeholder="Alexei Ward">
                <input type="email" class="column" placeholder="example@example.com">
              </div>
              <!-- Phone number -->
              <p class="form-label">Phone Number</p>
              <input type="number" class="column" placeholder="1234567890">
              <!-- Shipping info -->
              <h3 class="shiping-info">shipping info</h3>
              <!-- Address inputs -->
              <p class="form-label">Address</p>
              <input type="text" placeholder="1137 Williams Avenue" class="address-input">
                
              <div class="input-grid">
                <div class="name">
                  <p class="form-label">ZIP Code</p>
                </div>
                <div class="email">
                  <p class="form-label">City</p>
                </div>
                <input type="number" class="column" placeholder="10001">
                <input type="text" class="column" placeholder="New york">
              </div>
              <!-- Country input -->
              <p class="form-label">Country</p>
              <input type="number" class="column" placeholder="United States">
              <!-- Payment details -->
              <h3 class="payment-info">payment details</h3>
              <div class="payment-info-col">
                <!-- Payment method -->
                <h4 class="payment-method">Payment Method</h4>
                <div class="input-wrapper">
                  <input type="text" class="column left">
                  <input type="radio" class="radio-input" id="accent" name="payment_option">
                  <p class="radio-label">e-Money</p>
                </div>
                <h4></h4>
                <div class="input-wrapper">
                  <input type="text" class="column left">
                  <input type="radio" class="radio-input" id="accent" name="payment_option">
                  <p class="radio-label">Cash on Delivery</p>
                </div>
              </div>
              <!-- Additional e-money details -->
              <div class="input-grid">
                <div class="name">
                  <p class="form-label">e-Money Number</p>
                </div>
                <div class="email">
                  <p class="form-label">e-Money PIN</p>
                </div>
                <input type="number" class="column" placeholder="2345677" disabled>
                <input type="number" class="column" placeholder="6891" disabled>
              </div>
            </form>
          </div>
          <h4 class="billing"></h4>
        </div>
        <!-- Column 2 -->
        <div class="column-2">
          <!-- Your content for the second column -->
          <h2 class="column-2-heading">summary</h2>
          <!--Products-checkout-->
          <div class="cart-wrapper-container">
            <div class="column-side">
              <div class="image-background">
                <img src="@/assets/images/cart-black-headphone.png" alt="Logo" />
              </div>
              <div class="product-description">
                <h3>XX99 MK II</h3>
              </div>
              <p class="price">$ 2,999</p>
            </div>
            <div class="column-side">
              <h5 class="x-name">X1</h5>
            </div>
          </div>
          
          <!--Products-checkout-->
          <div class="cart-wrapper-container">
            <div class="column-side">
              <div class="image-background">
                <img src="@/assets/images/cart-white-headphone.png" alt="Logo" />
              </div>
              <div class="product-description">
                <h3>XX59</h3>
              </div>
              <p class="price">$ 899</p>
            </div>
            <div class="column-side">
              <h5>X2</h5>
            </div>
          </div>

          <!--Products-checkout-->
          <div class="cart-wrapper-container">
            <div class="column-side">
              <div class="image-background">
                <img src="@/assets/images/cart-iphord.png" alt="Logo" />
              </div>
              <div class="product-description">
                <h3>YX1</h3>
              </div>
              <p class="price">$ 599</p>
            </div>
            <div class="column-side">
              <h5>X1</h5>
            </div>
          </div>

          <div class="cart-wrapper-container">
            <div class="column-side">
              <h2 class="total">Total</h2>
            </div>
            <div class="column-side">
              <h2 class="total-price">$ 5,9569</h2>
            </div>
          </div>

          <div class="cart-wrapper-container">
            <div class="column-side">
              <h2 class="total">SHIPPING</h2>
            </div>
            <div class="column-side">
              <h2 class="total-price">$ 50</h2>
            </div>
          </div>
          <div class="cart-wrapper-container">
            <div class="column-side">
              <h2 class="total">VAT (INCLUDED)</h2>
            </div>
            <div class="column-side">
              <h2 class="total-price">$ 1,079</h2>
            </div>
          </div>
          <div class="cart-wrapper-container">
            <div class="column-side">
              <h2 class="total">GRAND TOTAL</h2>
            </div>
            <div class="column-side">
              <h2 class="total-price"><span>$ 5,446</span></h2>
            </div>
          </div>
          <button class="cart-shop-button"><router-link to="/checkoutmodal">CONTINUE & PAY</router-link></button>
        </div>
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
  background: #fff;
  width: 746px;
  height: 1248px;
  margin-left: 200px;
  opacity: 0.9;
  border-radius: 0.999rem;
}

/* Style for the second column */
.column-2 {
  width: 350px;
  height: 662px;
  background: #fff;
  opacity: 0.9;
  border-radius: 0.999rem;
}

.column-1 .checkout-heading {
  margin: 3.78rem 0 0 3.899rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  /* identical to box height, or 112% */
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  color: #000000;
}

.column-1 .billing-details {
  margin: 2.78rem 0 0 3.899rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  /* identical to box height, or 192% */
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #d87d4a;
}

.billing-form {
  display: grid;
  gap: 5px;
  margin-left: 59px;
  margin-top: 30px;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "name email"
    "input input";
}

.name {
  grid-area: name;
}

.email {
  grid-area: email;
}

.column {
  width: 300px;
  height: 56px;
  border: 2px solid #CFCFCF;
  border-radius: 8px;

}

.column input::placeholder{
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;
}
.form-label {
  margin-top: 10px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px; 
  color: #000000;
}
.shiping-info{
margin-top: 70px;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 25px;
/* identical to box height, or 192% */
letter-spacing: 0.928571px;
text-transform: uppercase;
color: #D87D4A;
}

.address-input{
  width: 634px;
  height:56px ;
  border: 2px solid #CFCFCF;
  border-radius: 8px;
}

.payment-info{
  margin-top: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
/* identical to box height, or 192% */
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #D87D4A;
}

.payment-info-col {
  display: grid;
  grid-template-columns: auto auto; /* Two columns with equal width */
  grid-gap: 10px; /* Gap between grid items */
}

.payment-method{
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.2142857164144516px;
  text-align: left;

}

.left {
  margin-left: 194px; /* Adjust as needed */
}

.input-wrapper {
  position: relative;
  display: inline-block;
}

.radio-input {
  position: absolute;
  top: 25%;
  right: 295px; /* Adjust as needed */
  transform: translateY(-50%);
}

.radio-label {
  position: relative;
  bottom: 43%;
  right: -250px; /* Adjust as needed */
  transform: translateY(-50%);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.25px;

}

#accent{
  accent-color: #D87D4A; /* Change text color when radio button is checked */
}

/**Column-2 Styles */
.column-2-heading{
  padding-top: 20px;
  padding-bottom: 10px;
  margin:0 0 0 35px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
/* identical to box height */
  letter-spacing: 1.28571px;
  text-transform: uppercase;

color: #000000;
}

.cart-wrapper-container {
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  margin: 20px 5px;
}

.column-side {
  flex: 1;
  margin-top: -10px;
  margin-left: 30px; /* Adjust the margin as needed */
}


 .image-background{
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

 .product-description{
  position: relative;
  top:-0.921rem;
  left: 5rem;
  width: 90px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
/* identical to box height, or 167% */
   color: #000000;
}

.price{
  position: relative;
  top: -2rem;
  left: 5rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
/* identical to box height, or 167% */
  color: #000;
  mix-blend-mode: normal;
  opacity: 0.5;
}

h5 {
width: 15px;
margin-top: 0.23rem;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
/* identical to box height, or 167% */
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
}

.total-price{
  margin-left: -60px;
  width: 284px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 10px;
/* identical to box height */

color: #000000;
}

.total{
  width: 114px;
  margin: 0 0 4px 5px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
/* identical to box height, or 167% */
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  text-transform: uppercase;
}

span{
  color: #D87D4A;
}

.cart-shop-button {
  margin: 0px 50px 20px 40px;
  border: none;
  width: 284px;
  height: 48px;
  background: #D87D4A;
}

.cart-shop-button a {
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
  text-decoration: none; /* Remove the link text decoration */

}
</style>
