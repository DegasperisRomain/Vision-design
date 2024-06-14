<template>
    <h1 class="title-section" data-aos="fade-right" data-aos-once="true">
        <span>{{ subTitle }}</span>
        {{ title }}
    </h1>
</template>

<script setup>
defineProps({
    title: String,
    subTitle: String,
})

</script>

<style lang="scss" scoped>
h1 {
    color: #FFF;
    text-align: right;
    font-family: 'Avenir';
    font-size: 67px;
    font-style: normal;
    font-weight: 800;
    text-transform: uppercase;
    line-height: normal;
    display: flex;
    flex-direction: column;
    width: max-content;

    span {
        color: rgba(255, 255, 255, 0.30);
        font-family: 'Neue Montreal', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>