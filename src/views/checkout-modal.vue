<script setup>

</script>

<template>



 <!--Modal Html-->
 <div class="modal-wrapper">
        <!--Oval Background-->
        <div class="oval-background">
          <img src="@/assets/images/Path 4.png" alt="Logo" />
        </div>
        <!--Thank you-->
        <h2 class="heading">THANK YOU <br>FOR YOUR ORDER</h2>
        <p class="message">You will receive an email confirmation shortly.</p>
        <!--XXx9 mark-->
        <div class="xxx9-container">
          <div class="xxx9-container-column">
          <div class="info-container">
          <img src="@/assets/images/image-removebg-preview(47).png" alt="Logo" />
            <div class="mark-text">
              <h4>XX99 MK II</h4>
              <p class="prrices">$ 2,999</p>
            </div>
            <p class="x1">X1</p>
        </div>
            <p class="others">and 2 other item(s)</p>
          </div>
        <div class="xxx9-container-column">
         <h3 class="grand-total">GRANDTOTAL</h3>
         <p class="amount">$ 5,446</p>
        </div>
    </div>
    <button class="back-button">BACK TO HOME</button>
</div>
</template>

<style>
 .modal-wrapper{
    margin:60px 700px 0 500px;
    background: #fff;
    width:560px;
    height: 595px;
    border-radius: 8px;
 }

 .oval-background{
    position: relative;
    top: 40px;
    left: 60px;
    background: #D87D4A;
    width: 64px;
    height: 64px;
    border-radius: 100px;
 }

 .oval-background img{
    margin: 1.4444rem 1rem 1rem 1.3rem;
    width: 22.55px;
    height: 15.8px;
    border: 4px;
 }

 .heading{
    margin-top:80px;
    margin-left: 65px;
    width: 284px;
    height: 72px;
    font-family: Manrope;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    color: #000000;
    letter-spacing: 1.1428571939468384px;
 }
 
 .message{
    margin: 20px 0 0 70px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    opacity: 0.5;
 }

 .xxx9-container {
  display: flex;
  margin: 25px;
  margin-left: 60px;
  justify-content: space-between;
  background-color: #F1F1F1; /* Background color for the container */
  max-width: 444px; /* Adjust the maximum width as needed */
  height: 180px;
}

.xxx9-container-column {
  padding: 20px;
}

.xxx9-container-column:first-child {
  flex: 2; /* Make the left column wider */
  background-color: #F1F1F1; /* Background color for the left column */
  border-radius: 5px;
}

.xxx9-container-column:last-child {
  flex: 1; /* Make the right column narrower */
  background-color: #000000; /* Background color for the right column */
  color: #F1F1F1;
  border-radius: 5px;
}


.info-container{
    display: flex;
    border-bottom: 1px solid rgba(10, 10, 10, 0.2);
}

.info-container img{
  margin: 25px;
  width: 28px;
  height: 32px;
  object-fit: contain;
}

.mark-text {
    width: 75px;
    padding: 0;
    
}

.mark-text h4{
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
}

.mark-text p{
    font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0px;
text-align: left;

}

.mark-text .prrices {
    padding-bottom: 10px;
}

.x1{
    margin-left: 100px;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: right;
    opacity: 0.5;
}

.others{
    font-family: Manrope;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.2142857164144516px;
    text-align: left;
    text-align: center;
    color: #000000;
    opacity: 0.5;
}

.back-button{
   width: 444px;
   height: 48px;
   background: #D87D4A;
   border: none;
   color: #fff;
   margin-top: 10px;
   margin-left: 60px;
   font-family: Manrope;
   font-size: 13px;
   font-weight: 700;
   line-height: 18px;
   letter-spacing: 1px;
   text-align: center;
}

.grand-total{
  font-family: Manrope;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  text-align: center;
  margin-top: 30px;
  opacity: 0.5;
}

.amount{
   font-family: Manrope;
   font-size: 18px;
   font-weight: 700;
   line-height: 25px;
   letter-spacing: 0px;
   text-align: left;
   color: #FFFF;
}
</style>