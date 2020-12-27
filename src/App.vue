<template lang="pug">
v-app(
  :style='{ background: $vuetify.theme.themes[$vuetify.theme.dark ? "dark" : "light"].background }'
)
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
  line-height: 72px;
  color: #28282c;
  text-align: center;
  margin: 40px 0px;
}
@media only screen and (max-width: 800px) {
  .title-text {
    font-size: 35px;
    line-height: 40px;
    margin: 30px 0px;
  }
}
@media only screen and (max-width: 400px) {
  .title-text {
    font-size: 25px;
    line-height: 30px;
    margin: 30px 0px;
  }
}
.theme--dark .title-text {
  color: #e0e0e0;
}
.subtitle-text {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 73px;
  text-align: center;
  color: #28282c;
  margin: 40px 0px;
}
@media only screen and (max-width: 540px) {
  .subtitle-text {
    font-size: 30px;
    margin: 30px 0px;
  }
}
.theme--dark .subtitle-text {
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
.left-wing {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
}
.right-wing {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
}
.screenshot-container {
  position: relative !important;
}
.features {
  margin-top: 60px;
  padding: 0px 20px;
  background-color: #f5f6fa;
}
.theme--dark .features {
  background-color: #030408;
}
.feature {
  width: 30%;
}
@media only screen and (max-width: 960px) {
  .feature {
    width: 80%;
  }
}
@media only screen and (max-width: 600px) {
  .feature {
    width: 100%;
  }
}
.feature-title {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 34px;
  color: #333333;
}
.theme--dark .feature-title {
  color: #bfbfbf;
}
.feature-subtitle {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;

  color: #858a8f;
}
.bottom-text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  color: #858a8f;
  margin-bottom: 30px;
}
@media only screen and (max-width: 600px) {
  .bottom-text {
    font-size: 20px;
    line-height: 34px;
  }
}
a {
  text-decoration: none;
  color: #0176ff;
}
</style>
