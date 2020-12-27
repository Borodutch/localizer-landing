<template lang="pug">
.v-container.pb-8
  .d-flex.justify-center.mx-2
    .title-text {{ $t("home.headline") }}
  .d-flex.justify-center.screenshot-container.mx-2
    v-img.left-wing(src='/img/left.png', max-width='30%', contain)
    v-img.right-wing(src='/img/right.png', max-width='30%', contain)
    v-img(src='/img/screenshot.png', max-width='75%')
  .d-flex.flex-column.justify-center.features.pb-8
    .subtitle-text {{ $t("home.features") }}
    .d-flex.flex-wrap.flex-row.justify-space-around.align-start
      .d-flex.flex-column.feature.ma-4(
        v-for='(feature, i) in $t("features")',
        :key='feature.title'
      )
        .d-flex.flex-row.align-start
          img.mr-2(:src='`/img/${i}.svg`')
          .d-flex.flex-column
            .feature-title {{ feature.title }}
            .feature-subtitle(v-html='feature.description')
  .d-flex.flex-row.justify-center.align-center.mx-2
    img.mx-2(src='/img/heart.svg', width='50px')
    img.mr-1(src='/img/logo.svg')
    .subtitle-text ?
  .d-flex.mx-2.flex-column
    .bottom-text(v-html='$t("home.todorant")')
    .bottom-text(v-html='$t("home.todorant2")')
    .bottom-text(v-html='$t("home.or")')
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {}
</script>

<style>
v-img {
  max-width: 80% !important;
}
</style>
