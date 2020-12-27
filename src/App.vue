<template lang="pug">
v-app
  Navbar
  v-main
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class'

const AppStore = namespace('AppStore')

@Component({ components: { Navbar } })
export default class App extends Vue {
  @AppStore.State dark!: boolean

  mounted() {
    ;(this.$vuetify.theme as any).dark = this.dark
  }
}
</script>

<style>
.title-text {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  color: #28282c;
}
.theme--dark .title-text {
  color: #e0e0e0;
}
.setup-button {
  background: #0176ff;
  border-radius: 12px !important;
}
.setup-button-text {
  color: white;
  text-transform: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
}
.navbar-button {
  padding: 0px !important;
  padding: 0px !important;
}
</style>
