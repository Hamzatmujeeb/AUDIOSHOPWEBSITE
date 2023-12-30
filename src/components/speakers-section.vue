<template>
  <div class="main-container">
    <div class="container">
      <div class="first-section">
        <img src="@/assets/Images/big-speaker.png" class="product-images" alt="Speaker">
        <div class="container-text">
          <h2>ZX9<br />SPEAKER</h2>
        </div>
        <p class="text-paragraph">Upgrade to premium speakers that are<br /> 
          phenomenally built to deliver truly remarkable<br /> sound.
        </p>
        <div class="See-product">
          <button>See Product</button>
        </div>
        <div class="small-speaker">
          <img src="@/assets/Images/small-speaker.png" alt="">
          <h2 class="zx-text">ZX7 <br/>SPEAKER</h2>
          <div class="see-button-container">
            <button>See Product</button>
          </div>
        </div>
      </div>
      <div class="second-section">
        <div class="custom-container">
          <div class="custom-grid">
            <div class="custom-left">
              <img src="@/assets/Images/ipord.png" alt="">
            </div>
            <div class="custom-right">
              <h2>YX1 EARPHONES</h2>
              <button>SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

 .container{
    position: absolute;
    width: 1190px;
    height: 560px;
    flex-shrink: 0;
    top: 220%; 
    left: 51%; 
    transform: translate(-50%, -50%);
    background: #D87D4A;
    border-radius: 8px;
 }

 .product-images{       
    position: absolute;
    object-fit: contain;
    width: 410.23px;
    height: 393px;
    left: 120.49px;
    top:165px;
    bottom:0;
 }

 .container-text{
   position: absolute;
   height: 116px;
   left: 57%;
   right: 0.21%;
   top: calc(49% - 116px/2 - 93.5px);
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 700;
   font-size: 56px;
   line-height: 68px;
   /* or 104% */
   letter-spacing: 2px;
   text-transform: uppercase;
   color: #FFFFFF;
 }

 .text-paragraph{        
  position: absolute;
  left: 57%;
  right: 0.21%;
  top: 64.2%;
  bottom: 29.04%;
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
.See-product {
   position: absolute;
   left: 57%;
   right: 0.21%;
   top: 83%;
   bottom: 0%;
 }
 .See-product button {
  height: 46px;
  font-family: 'Manrope';
  font-style: normal;
  border: none;
  padding: 10px;
  background: #333;
  width: 150px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
 /* identical to box height */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
 }

 .small-speaker {
   position: absolute;
   top:110%;
   bottom: 0;    
 }

 .small-speaker img {
    width: 1190px;
   height: 320px;
   border-radius:8px;
 }

 .zx-text{
   position: absolute;
   height: 38px;
   left: 10%;
   right: 0.98%;
   bottom:-8.438rem;
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 700;
   font-size: 28px;
   line-height: 38px;
   letter-spacing: 2px;
   text-transform: uppercase;
   color: #000000;
 }

 .see-button-container{
   position: absolute;
   left: 10%;
   right: 0%;
   top: 210px;
   bottom: 0;
 }

  button {
   background:none;
   border: 1.5px solid #000000;
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   width: 160px;
   height: 40px;
   line-height: 18px;
   /* identical to box height */
   letter-spacing: 1px;
   text-transform: uppercase;
   color: #000000;
 }

/* Styles for Second Section */
.second-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-section .custom-container {
  position: absolute;
  top: 180%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-grid {
  display: grid;
  grid-template-columns: 1fr 4rem;
  grid-gap: 39px;
}

.custom-left img {
  width: 570px;
  height: 360px;
  border-radius: 8px;
}

.custom-right {
  background-color: #f1f1f1;
  padding: 20px;
  width: 540px;
  height: 320px;
  border-radius: 8px;
}

.custom-right h2 {
  margin: 100px 90px 0px 90px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
}

.custom-right button {
  display: block;
  width: 160px;
  height: 48px;
  margin: 50px 90px 0px 94px;
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style:normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>