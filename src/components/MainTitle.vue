<template>

    <h1>
        Lorem <span><img src="@/assets/images/subtract.svg" alt=""></span>
        ipsum dolor
        sit amet <span>2024</span>
    </h1>

</template>

<script>
</script>

<style lang="scss" scoped>
h1 {
    color: #FFF;
    font-family: 'Avenir';
    font-size: 67px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    width: 450px;

    span:nth-child(1) {
        margin-left: 35px;
    }

    span:nth-child(2) {
        color: rgba(255, 255, 255, 0.30);
        font-family: 'Neue Montreal', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>