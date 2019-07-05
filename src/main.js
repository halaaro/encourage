import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import PageBody from './components/PageBody.vue'
import PageTitle from './components/PageTitle.vue'

import ScriptureCarousel from './components/ScriptureCarousel.vue'

Vue.config.productionTip = true

Vue.component('PageBody', PageBody)
Vue.component('PageTitle', PageTitle)
Vue.component('ScriptureCarousel', ScriptureCarousel)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
