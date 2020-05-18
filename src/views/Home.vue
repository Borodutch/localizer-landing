<template lang="pug">
  .v-container.ma-2.pa-4
    v-layout(
      column
      justify-center
      align-center
    )
      div(style='max-width: 600px')
        v-row.my-4.justify-center
          .display-1 👩‍💻👨‍💻 👉 🇬🇧🇫🇷🇮🇹
        v-row.text-center
          .headline.pb-4.px-4 {{$t("home.headline")}}
        v-row
          v-img(
            src='/img/screenshot.png'
            :alt='$t("screenshot")'
            contain
            :max-width='windowWidth * 0.8 > 600 ? 600 : windowWidth * 0.8'
          )
        v-row.mt-4.justify-center
          .display-1.mx-4(v-if='$vuetify.breakpoint.smAndUp') 👉
          v-btn.mb-4(
            color='primary'
            href='https://medium.com/@nikitakolmogorov/how-to-setup-localizer-for-you-product-360bd40e86cb'
            target='_blank'
          ) {{$t('home.setupButton')}}
          .display-1.mx-4(v-if='$vuetify.breakpoint.smAndUp') 👈
        v-row.mb-4.justify-center
          .title(v-html='$t("home.or")')
        v-row.my-4.justify-center
          .display-1 {{$t("home.features")}}
        .justify-start.text-left
          div.mb-3.mx-2(
            v-for='feature in $t("features")'
            :key='feature.title'
          )
            v-row
              .headline {{feature.title}}
            v-row
              .subtitle-1(v-html='feature.description')
        v-row.my-8.justify-center
          .display-1.mx-4(v-if='$vuetify.breakpoint.smAndUp') 👉
          v-btn.mb-4(
            color='primary'
            href='https://medium.com/@nikitakolmogorov/how-to-setup-localizer-for-you-product-360bd40e86cb'
            target='_blank'
          ) {{$t('home.setupButton')}}
          .display-1.mx-4(v-if='$vuetify.breakpoint.smAndUp') 👈
        v-row.my-4.justify-center
          .display-1 {{$t('home.loveLocalizer')}}
        span(
          style='max-width: 500px'
        )
          v-row
            .headline.pb-4.px-4(v-html='$t("home.todorant")')
          v-row
            .headline.pb-4.px-4(v-html='$t("home.todorant2")')
        v-row.justify-center
          .caption(v-html='$t("home.caption")')
</template>

<script lang="ts">
import Vue from 'vue'
import * as store from '../plugins/store'
import Component from 'vue-class-component'
import { i18n } from '../plugins/i18n'

@Component
export default class Home extends Vue {}
</script>

<style>
v-img {
  max-width: 80% !important;
}
</style>
