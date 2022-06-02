<template>
    <header class="header">
        <span
            class="header__title"
            :class="{ 'header__title--register': !isLogin }"
        >
            {{ getText }}
        </span>

        <span class="header__subtitle" v-if="isLogin">
            Lorem ipsum dolor sit amet consectetur!
        </span>
    </header>
</template>

<script>
export default {
    props: {
        isLogin: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        getText() {
            return this.isLogin ? "Login" : "Sign in";
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.header {
    @include flex-break;

    &__title {
        line-height: normal;
        font: 400 4rem $font-family;
        
        &--register {
            margin-bottom: get-spacer(9);
        }
    }

    &__subtitle {
        margin: get-spacer(9) 0;
        line-height: normal;
        font: 400 1rem $font-family;
    }
}
</style>