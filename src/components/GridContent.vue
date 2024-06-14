<template>
    <div class="parent">
        <div class="div1" data-aos="fade-left" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Praesent sed ipsum neque. In placerat vitae massa a sodales. Nam et efficitur enim, vel porta est.
            Proin sit amet libero ante. Duis consectetur mollis leo ut semper. In quis mollis diam. Cras non ex id quam
            egestas luctus.</div>
        <div class="div2" data-aos="fade-right" data-aos-once="true">
            <img src="@/assets/images/rectangle-7.png" alt="">
        </div>
        <div class="div3" data-aos="fade-up" data-aos-once="true">
            <img src="@/assets/images/rectangle-8.png" alt="">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    margin-top: 20%;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
    margin-top: -70px;
    width: 257px;
    color: rgba(255, 255, 255, 0.30);
    font-family: 'Neue Montreal', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
}

.div3 {
    grid-area: 2 / 1 / 3 / 2;
}
</style>