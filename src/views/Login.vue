<template>
    <LoginWrapper
        is-login
        :loading="loading"
        @action-button="handleLogin"
    >
        <v-form
            ref="formLogin"
            v-model="valid"
            lazy-validation
        >
            <BaseField
                v-model="credentials.ds_login"
                label="Login"
                :rules="rules.login"
            />

            <BaseFieldPassword
                v-model="credentials.ds_senha"
                :rules="rules.password"
            />
        </v-form>
    </LoginWrapper>
</template>

<script>
import LoginWrapper from '@/components/Login/LoginWrapper.vue';
import BaseField from '@/components/Base/BaseField.vue';
import BaseFieldPassword from '@/components/Base/BaseFieldPassword.vue';
import { mapGetters } from 'vuex';
import User from '../models/user';

export default {
    components: {
        LoginWrapper,
        BaseField,
        BaseFieldPassword,
    },

    computed: {
        ...mapGetters({
            getLoggedIn: 'auth/getLoggedIn'
        })
    },

    mounted() {
        if (this.getLoggedIn) {
            this.$router.push('/');
        }
    },

    data() {
        return {
            credentials: new User(),
            loading: false,
            rules: {
                login: [(v) => !!v || "O campo de login não pode ser vazio"],
                password: [(v) => !!v || "O campo de senha não pode ser vazio"]
            },
            valid: true
        }
    },

    methods: {
        async handleLogin() {
            this.loading = true;

            if (this.$refs.formLogin.validate()) {
                try {
                    await this.$store.dispatch('auth/login', this.credentials);

                    this.$router.push('/');
                } catch (error) {
                    console.log(error);
                }
            }

            this.loading = false;
        }
    }
}
</script>