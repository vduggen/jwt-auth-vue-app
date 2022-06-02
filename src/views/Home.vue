<template>
  <BaseBackground>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Registro</router-link>
  </BaseBackground>
</template>

<script>
import BaseBackground from '../components/Base/BaseBackground.vue';

export default {
  name: "Home",
  components: { BaseBackground }
}
</script>
