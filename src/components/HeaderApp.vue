<template>
    <header>
        <img src="@/assets/images/logo.svg" alt="Logo de Vision Design">

        <div>
            <SelectLang />
            <router-link>Menu</router-link>
        </div>
    </header>
</template>

<script setup>
import SelectLang from './SelectLang.vue';

</script>

<style lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    div {
        display: flex;
        gap: 50px;
    }


}
</style>