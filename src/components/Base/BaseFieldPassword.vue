<template>
    <BaseField
        v-bind="$attrs"
        label="Password"
        :append-icon="input.icon"
        :type="input.type"
        @click:append="viewPassword = !viewPassword"
        @input="$emit('input', $event)"
        :value="value"
    />
</template>

<script>
import BaseField from "./BaseField";

export default {
    components: {
        BaseField
    },

    props: {
        value: {
            type: String,
            default: ''
        }
    },

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
}
</script>