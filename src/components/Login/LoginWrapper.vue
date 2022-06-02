<template>
    <BaseBackground>
        <div class="wrapper">
            <LoginHeader :is-login="isLogin" />

            <div class="wrapper__main">
                <slot />

                <LoginFooter :is-login="isLogin" />
            </div>
        </div>
    </BaseBackground>
</template>

<script>
import LoginFooter from './LoginFooter.vue';
import LoginHeader from './LoginHeader.vue';
import BaseBackground from '../Base/BaseBackground.vue';

export default {
    components: {
    LoginFooter,
    LoginHeader,
    BaseBackground
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
.wrapper {
    width: 347px;
    text-align: center;

    &__main {
        width: 300px;
        margin: 0 auto;
    }
}
</style>