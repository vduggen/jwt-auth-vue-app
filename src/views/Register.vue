<template>
    <LoginWrapper>
        <BaseField label="Name" />

        <BaseField label="Login" />

        <BaseFieldPassword />
    </LoginWrapper>
</template>

<script>
import LoginWrapper from '@/components/Login/LoginWrapper.vue';
import BaseField from '@/components/Base/BaseField.vue';
import BaseFieldPassword from '@/components/Base/BaseFieldPassword.vue';

export default {
    components: {
        LoginWrapper,
        BaseField,
        BaseFieldPassword
    }
}
</script>