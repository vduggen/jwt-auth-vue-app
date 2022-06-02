<template>
    <div class="auth">
        <div class="auth__wrapper">
            <LoginHeader :is-login="isLogin" />

            <div class="auth__main">
                <slot />

                <LoginFooter :is-login="isLogin" />
            </div>
        </div>
    </div>
</template>

<script>
import LoginFooter from './LoginFooter.vue';
import LoginHeader from './LoginHeader.vue';

export default {
    components: {
        LoginFooter,
        LoginHeader
    },

    props: {
        isLogin: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.auth {
    $ref: &;

    background-color: $secondary;
    background-image: url('../../assets/Vectors.svg');
    background-size: contain;
    background-position-y: bottom;
    color: $white;

    @include set-w-h(100%);
    @include d-flex(center, center, column);

    &__wrapper {
        width: 347px;
        text-align: center;

        #{$ref}__main {
            width: 300px;
            margin: 0 auto;
        }
    }
}
</style>