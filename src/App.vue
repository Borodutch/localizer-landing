<template lang="pug">
  v-app(dark)
    Navbar
    Snackbar
    v-content
      router-view
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import Snackbar from './components/Snackbar.vue'

export default {
  components: { Navbar, Snackbar },
  created() {
    ;(this as any).$vuetify.theme.dark = true
  },
}
</script>
