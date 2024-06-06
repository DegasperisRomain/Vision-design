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

    <div class="right">
      <TitleSection
      :title="'Notre Histoire'"
      :subTitle="'1984'"
      >

      </TitleSection>
      <GridContent />
    </div>
  </section>

  <section class="section-three">
    <TitleSection
      :title="'Service'"
      :subTitle="'our'"
      style="text-align: left"
      ></TitleSection>
    <ListService />
  </section>

  <section class="galery">
    <GridGalery />
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
import TitleSection from './components/TitleSection.vue';
import GridContent from './components/GridContent.vue';
import GridGalery from './components/GridGalery.vue'
</script>

<style lang="scss">
.first-section {
  display: flex;
  justify-content: center;

  .left {
    width: 50%;
    padding: 24px 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
}


.second-section {
  display: flex;
  justify-content: center;

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    width: 50%;
  }
}

.section-three {
  margin: 100px 230px;
  display: flex;
  flex-direction: column;
}

.galery {
  margin-bottom: 50px;
}

footer {
  display: flex;
  justify-content: space-between;
  background: #060606;
  padding: 0 24px;
}
</style>
