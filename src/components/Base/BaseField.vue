<template>
    <v-text-field
        solo
        dark
        background-color="#3c5e6a"
        class="input"
        v-bind="$attrs"
        v-on="$listeners"
        @input="$emit('input', $event)"
        :value="value"
    />
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";

.input {
    @include border-radius;
}
</style>