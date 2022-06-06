<template>
    <LoginWrapper
        :loading="loading"
        @action-button="handleRegister"
    >
        <v-form
            ref="formRegister"
            v-model="valid"
            lazy-validation
        >
            <BaseField label="Name" />

            <BaseField label="Login" />

            <BaseFieldPassword />
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
        BaseFieldPassword
    },

    computed: {
        ...mapGetters({
            getLoggedIn: 'auth/getLoggedIn'
        })
    },

    data() {
        return {
            loading: false,
            valid: true,
            credentials: new User()
        }
    },

    mounted() {
        if (this.getLoggedIn) {
            this.$router.push('/');
        }
    },

    methods: {
        async handleRegister() {
            this.loading = true;

            if (this.$refs.formRegister.validate()) {
                try {
                    await this.$store.dispatch('auth/register', this.credentials);

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