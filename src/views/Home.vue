<template>
  <BaseBackground>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Registro</router-link>
  </BaseBackground>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseBackground from '../components/Base/BaseBackground.vue';

export default {
  name: "Home",
  
  components: { BaseBackground },

  computed: {
    ...mapGetters({
      getUser: 'auth/getUser'
    })
  },
  mounted() {
    if (!this.getUser) {
      this.$router.push('/login');
    }
  }
}
</script>
