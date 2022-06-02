<template>
    <div class="login">
        <div class="login__wrapper">
            <LoginHeader is-login />

            <div class="login__main">
                <v-text-field
                    solo
                    label="Login"
                    dark
                    background-color="#3c5e6a"
                    class="login__input"
                >
                </v-text-field>

                <v-text-field
                    solo
                    label="Password"
                    :append-icon="input.icon"
                    :type="input.type"
                    @click:append="viewPassword = !viewPassword"
                    dark
                    background-color="#3c5e6a"
                    class="login__input"
                >
                </v-text-field>

                <LoginFooter is-login />
            </div>
        </div>
    </div>
</template>

<script>
import LoginFooter from '../components/LoginFooter.vue';
import LoginHeader from '../components/LoginHeader.vue';

export default {
    data() {
        return {
            viewPassword: false
        };
    },

    computed: {
        input() {
            return {
                icon: this.viewPassword ? "mdi-eye" : "mdi-eye-off",
                type: this.viewPassword ? "text" : "password",
            };
        }
    },

    components: { LoginFooter, LoginHeader }
}
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.login {
    $ref: &;

    background-color: $secondary;
    background-image: url('../assets/Vectors.svg');
    background-size: contain;
    background-position-y: bottom;
    color: $white;

    @include set-w-h(100%);
    @include d-flex(center, center, column);

    &__wrapper {
        width: 347px;
        text-align: center;

        #{$ref}__input {
            @include border-radius;
        }

        #{$ref}__main {
            width: 300px;
            margin: 0 auto;
        }
    }
}
</style>