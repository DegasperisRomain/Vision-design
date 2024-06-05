<template>
    <ul>
        <li v-for="(language, index) in languages" :key="index" :class="{ active: activeLang === index }"
            @click="setActive(index)">
            {{ language }}
        </li>
    </ul>
</template>

<script>
import { useLanguageStore } from '../stores/language';
import { computed } from 'vue';

export default {
    setup() {
        const languageStore = useLanguageStore();
        const activeLang = computed(() => languageStore.activeLang);

        const setActive = (index) => {
            languageStore.setActiveLang(index);
        };

        return { languages: ['EN', 'FR'], activeLang, setActive };
    }
};
</script>

<style lang="scss">
ul {
    display: flex;

    li {
        padding: 0 6px;
        list-style: none;
        color: rgba(255, 255, 255, 0.3);

        &.active {
            color: #fff
        }

        &:hover {
            cursor: pointer;
            color: #FFF;
        }
    }
}
</style>