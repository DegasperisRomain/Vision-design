<template>
    <div class="block">
        <slot class="title" name="title"></slot>
        <slot class="content" name="content"></slot>
    </div>
</template>

<script>

</script>

<style lang="scss">
.block {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 18px;
}
</style>
