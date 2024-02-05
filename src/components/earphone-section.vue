<template>
  <section class="centered-section">
    <div class="grid-container">
      <div class="grid-item">
        <h2>Bringing you the <br><span>best</span> audio gear</h2>
        <p>Located at the heart of New York City, Audiophile is the premier<br>store for high-end 
          headphones, earphones, speakers, and audio<br>accessories.We have a large showroom and luxury<br>
           demonstration rooms available for you to browse and<br> experience a wide range of our
           products. Stop by our store to<br>meet some of the fantastic people who make Audiophile
           the<br>best place to buy your portable audio equipment.</p>
      </div>
      <div class="grid-item"> 
        <img src="@/assets/images/john.png" alt="Audiophile Store">
      </div>
    </div>
  </section>
</template>

<style scoped>
section{
   max-width: 92rem;
}
.centered-section {
  position: absolute;
  top: 210.1rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.grid-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.775rem;
}


/* Optional styling for the columns */
.grid-item h2 {
  width: 27.8125rem;
  color: #000;
  font-family: Manrope;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.75rem; /* 110% */
  letter-spacing: 0.08931rem;
  text-transform: uppercase;
  margin-right: 150px;
}

.grid-item span{
  color: #D87D4A;
 font-family: Manrope;
 font-size: 2.5rem;
 font-style: normal;
 font-weight: 700;
 line-height: 2.75rem;
 letter-spacing: 0.08931rem;
text-transform: uppercase;
}
.grid-item p{
  width: 28.8125rem;
  color: #000;
  font-family: Manrope;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5625rem;
  opacity: 0.5;
}

.grid-item img{
  width: 33.75rem;
  height: 36.75rem;
  border-radius: 0.75rem;
}
</style>
