<template>
    <img src="@/assets/images/logo-footer.png" alt="">
    <div class="content">
        <div class="top">
            <select-lang>

            </select-lang>
        </div>
        <div class="middle">
            <ul>
                <li>
                    <vue-feather type="facebook"></vue-feather>
                </li>
                <li>
                    <vue-feather type="twitter"></vue-feather>
                </li>
                <li>
                    <vue-feather type="instagram"></vue-feather>
                </li>
                <li>
                    <vue-feather type="linkedin"></vue-feather>
                </li>
            </ul>
        </div>
        <div class="bottom">
            © 2020 Lift Media. All rights reserved.
        </div>
    </div>
</template>

<script setup>
import VueFeather from 'vue-feather';
import SelectLang from './SelectLang.vue';

</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    div {
        margin: 12px;
    }

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
}
</style>