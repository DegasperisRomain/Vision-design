<template>
  <section class="first-section">
    <div class="left">
      <HeaderApp />
      <FooterSection />
    </div>
    <img src="./assets/images/image-home.png" alt="">
  </section>

  <footer>
    <FooterApp />
  </footer>

</template>

<script setup>
import HeaderApp from './components/HeaderApp.vue';
import FooterSection from './components/FooterSection.vue'
import FooterApp from './components/FooterApp.vue';
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
  }
}

footer {
  display: flex;
  justify-content: space-between;
  background: #060606;
  padding: 0 24px;
}
</style>
