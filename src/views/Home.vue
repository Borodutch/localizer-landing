<template lang="pug">
  .v-container.pa-4
    v-layout(
      column
      justify-center
      align-center
    ).text-center
      v-row.my-4
        .display-1 👩‍💻👨‍💻 👉 🇬🇧🇫🇷🇮🇹
      v-row
        .headline.pb-4.px-4 {{$t("home.headline")}}
      v-row
        v-img(
          src='/img/screenshot.png'
          :alt='$t("screenshot")'
          width='600'
        )
      v-row.my-4
        .display-1.mx-4 👉
        v-btn.mb-4(
          color='primary'
          href='https://medium.com/@nikitakolmogorov/how-to-setup-localizer-for-you-product-360bd40e86cb'
          target='_blank'
        ) {{$t('home.setupButton')}}
        .display-1.mx-4 👈
      v-row.my-4
        .display-1 {{$t("home.features")}}
      .justify-start.text-left(
        style='max-width: 500px'
      )
        div.mb-3(
          v-for='feature in $t("features")'
          :key='feature.title'
        )
          v-row
            .headline {{feature.title}}
          v-row
            .subtitle-1(v-html='feature.description')
</template>

<script lang="ts">
import Vue from 'vue'
import * as store from '../plugins/store'
import Component from 'vue-class-component'
import { i18n } from '../plugins/i18n'

@Component
export default class Home extends Vue {}
</script>
