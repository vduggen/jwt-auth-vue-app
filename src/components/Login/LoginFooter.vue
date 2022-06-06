<template>
    <footer class="footer">
        <div class="footer__help" v-if="isLogin">
            <v-checkbox
                hide-details
                dark
                label="Remember me"
                class="footer__remember"
            />

            <a href="#" class="footer__forget">Forgot password?</a>
        </div>

        <v-btn
            color="#20DF7F"
            large
            block
            dark
            class="footer__button"
            :loading="loading"
            @click="$emit('action-button')"
        >
            {{ getText }}
        </v-btn>
    </footer>
</template>

<script>
    export default {
        props: {
            isLogin: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            getText() {
                return this.isLogin ? "Login" : "Create account"
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.footer {
    $ref: &;

    &__help {
        @include d-flex(center, space-between);
        margin-bottom: get-spacer(8);
    
        #{$ref}__remember {
            margin-top: 0;
            padding-top: 0;
            @include font-family;
        }

        #{$ref}__forget {
            @include link;
            text-align: right;
        }
    }

    &__button {
        text-transform: unset;
        @include border-radius;
        font: 400 .875rem $font-family;
    }
}
</style>