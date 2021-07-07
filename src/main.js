import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
