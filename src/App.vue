<template>
  <section class="first-section">
    <div class="left">
      <HeaderApp data-aos="fade-down" data-aos-once="true"></HeaderApp>
      <MainTitle data-aos="fade-right" data-aos-once="true"></MainTitle>
      <FooterSection data-aos="fade-up" data-aos-once="true"></FooterSection>
    </div>
    <img data-aos="fade-left" data-aos-once="true" src="./assets/images/image-home.png" class="img-section"
      alt="Sketch d'une maison d'architecte">
  </section>

  <section class="second-section">
    <img data-aos="fade-right" data-aos-once="true" src="./assets/images/image-section2.png" class="img-section"
      alt="Sketch d'une maison d'architecte">

    <div class="right">
      <TitleSection :title="'Notre Histoire'" :subTitle="'1984'" data-aos="fade-left" data-aos-once="true">

      </TitleSection>
      <GridContent />
    </div>
  </section>

  <section class="section-three">
    <TitleSection :title="'Service'" :subTitle="'our'" style="text-align: left"></TitleSection>
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


@media screen and (max-width: 1024px) {

  #app .img-section {
    width: 50vw;
  }

  h1.title-section {
    width: 50%;
  }

  .section-three {
    margin: 100px;
  }

  footer img {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .first-section {
    flex-direction: column;
  }

  #app .first-section .left {
    width: 100vw;
    height: 100vh;

  }

  #app .first-section .img-section {
    width: 100vw;
  }

  #app .second-section .right {
    width: 100vw;

    .parent {

      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

    }

    .div1 {
      grid-area: 1 / 1 / 2 / 2;
      margin-top: -70px;
    }

    .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }

    .div3 {
      grid-area: 2 / 1 / 3 / 2;
    }
  }

  #app .second-section .img-section {
    width: 100vw;
  }

  .second-section {
    flex-direction: column-reverse;


    .parent {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 20px;

      .div1 {
        grid-area: 2 / 1 / 3 / 2;
        margin-top: 10px
      }

      .div2 {
        grid-area: 1 / 1 / 2 / 2;
      }

      .div3 {
        grid-area: 3 / 1 / 4 / 2;
      }
    }
  }

  .section-three {
    .container {
      flex-direction: column;
      gap: 40px;

      .block {
        width: 100%;
      }


      p {
        text-align: justify;
      }

      h6 {
        text-align: justify;
        width: 100%;
      }
    }
  }

  .galery {
    .parent {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      padding: 0 100px;

      .div1 {
        grid-area: 1 / 1 / 2 / 2;
      }

      .div2 {
        grid-area: 1 / 2 / 2 / 3;
      }

      .div3 {
        grid-area: 4 / 1 / 5 / 2;
      }

      .div4 {
        grid-area: 3 / 2 / 5 / 3;
      }

      .div5 {
        grid-area: 2 / 1 / 3 / 3;
      }

      .div6 {
        grid-area: 3 / 1 / 4 / 2;
      }

      .div7 {
        grid-area: 5 / 1 / 6 / 2;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  #app .first-section {
    .left {
      height: 100vh;
    }
  }


  #app h1 {
    width: 300px;
    font-size: 42px;
  }

  #app .second-section .right {
    width: 100vw;

    .parent {
      display: flex;
      flex-direction: column;
      gap: 40px;

      div {
        text-align: justify;
      }
    }
  }

  .galery {
    .parent {
      padding: 0 20px;
    }
  }

  footer {
    flex-direction: column-reverse;
    gap: 40px;

    img {
      width: 100%;
    }

    .content {
      align-items: center;
      height: 50vh;


      ul {
        padding-left: 0;
      }
    }
  }
}
</style>
