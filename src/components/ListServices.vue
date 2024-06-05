<template>
    <div class="container">
        <BlockService>
            <template #title>
                <h6>Residential Design</h6>
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ipsum neque. In placerat vitae
                    massa a sodales. Nam et efficitur enim, vel porta est. Proin sit amet libero ante. Duis consectetur
                    mollis leo ut semper. In quis mollis diam. Cras non ex id quam egestas luctus.</p>
            </template>
        </BlockService>

        <BlockService>
            <template #title>
                <h6>Office Design</h6>
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ipsum neque. In placerat vitae
                    massa a sodales. Nam et efficitur enim, vel porta est. Proin sit amet libero ante. Duis consectetur
                    mollis leo ut semper. In quis mollis diam. Cras non ex id quam egestas luctus.</p>
            </template>
        </BlockService>

        <BlockService>
            <template #title>
                <h6>Architectural House</h6>
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ipsum neque. In placerat vitae
                    massa a sodales. Nam et efficitur enim, vel porta est. Proin sit amet libero ante. Duis consectetur
                    mollis leo ut semper. In quis mollis diam. Cras non ex id quam egestas luctus.</p>
            </template>
        </BlockService>

    </div>
</template>

<script setup>
import BlockService from "./BlockService.vue";

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    margin: 40px 0;
    justify-content: space-between;

    h6 {
        color: #FFF;
        font-family: 'Avenir';
        font-size: 20px !important;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        width: 35%;
    }

    p {
        color: rgba(255, 255, 255, 0.30);
        font-family: "Neue Montreal";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>