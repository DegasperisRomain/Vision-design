<template>
  <section class="first-section">
    <div class="left">
      <HeaderApp />
      <MainTitle />
      <FooterSection />
    </div>
    <img src="./assets/images/image-home.png" alt="Sketch d'une maison d'architecte">
  </section>

  <section class="second-section">
    <img src="./assets/images/image-section2.png" alt="Sketch d'une maison d'architecte">
  </section>

  <section class="section-three">
    <h3><span>Our</span>Service</h3>
    <ListService />
  </section>

  <footer>
    <FooterApp />
  </footer>

</template>

<script setup>
import HeaderApp from './components/HeaderApp.vue';
import FooterSection from './components/FooterSection.vue'
import FooterApp from './components/FooterApp.vue';
import MainTitle from './components/MainTitle.vue';
import ListService from './components/ListServices.vue';
</script>

<style lang="scss">
.first-section {
  display: flex;

  .left {
    width: 50%;
    padding: 24px 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
}

.section-three {
  margin: 100px 230px;
  display: flex;
  flex-direction: column;
}

footer {
  display: flex;
  justify-content: space-between;
  background: #060606;
  padding: 0 24px;
}

h3 {
  color: #FFF;
  font-family: 'Avenir';
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  span {
    color: rgba(255, 255, 255, 0.30);
    font-family: 'Avenir';
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
}
</style>
