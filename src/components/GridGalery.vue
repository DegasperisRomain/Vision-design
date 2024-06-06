<template>
<div class="parent">
    <div class="div1">
        <img src="@/assets/images/rectangle-9.png" alt="">
    </div>
    <div class="div2">
        <img src="@/assets/images/rectangle-10.png" alt="">
    </div>
    <div class="div3">
        <img src="@/assets/images/rectangle-12.png" alt="">
    </div>
    <div class="div4">
        <img src="@/assets/images/rectangle-13.png" alt="">
    </div>
    <div class="div5">
        <img src="@/assets/images/rectangle-11.png" alt="">
    </div>
    <div class="div6">
        <img src="@/assets/images/rectangle-14.png" alt="">
    </div>
    <div class="div7">
        <img src="@/assets/images/rectangle-15.png" alt="">
    </div>
</div>
</template>

<script setup>
</script>

<style lang="scss">
.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    img {
        width: 100%;
    }
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 4 / 2 / 5; }
.div4 { grid-area: 1 / 5 / 3 / 6; }
.div5 { grid-area: 2 / 2 / 3 / 4; }
.div6 { grid-area: 3 / 1 / 4 / 2; }
.div7 { grid-area: 3 / 4 / 4 / 5; }
</style>