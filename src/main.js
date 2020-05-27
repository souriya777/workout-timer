import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { toUnitTime } from '@/utils/TimerUtils'

// /!\ to be includ before any component
// otherwize it would not be a CSS normalizer...
// not include in vue.config.js because it's import for every loaded component...
import 'normalize.css'

Vue.config.productionTip = false

Vue.filter('unitTime', function (value) {
  return toUnitTime(value)
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
