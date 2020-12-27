import Vue from 'vue'
import Vuetify, {
  VApp,
  VAppBar,
  VSpacer,
  VBtn,
  VMenu,
  VList,
  VListItem,
  VListItemTitle,
  VFlex,
  VMain,
  VImg,
} from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VSpacer,
    VBtn,
    VMenu,
    VList,
    VListItem,
    VListItemTitle,
    VFlex,
    VMain,
    VImg,
  },
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      dark: {
        background: '#0D0D0D',
      },
      light: {
        background: '#FFFFFF',
      },
    },
  },
})
