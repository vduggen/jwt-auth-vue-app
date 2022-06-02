<template>
    <v-text-field
        solo
        dark
        background-color="#3c5e6a"
        class="input"
        v-bind="$attrs"
        v-on="$listeners"
    />
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.input {
    @include border-radius;
}
</style>