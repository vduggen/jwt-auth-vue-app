<template>
    <div class="background">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.background {
    $ref: &;

    background-color: $secondary;
    background-image: url('../../assets/Vectors.svg');
    background-size: contain;
    background-position-y: bottom;
    color: $white;

    @include set-w-h(100%);
    @include d-flex(center, center, column);
}
</style>