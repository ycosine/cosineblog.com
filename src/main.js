import Vue from 'vue'
import router from './router'
import App from './App.vue'
import filter from './utils/filter'
import store from './store'

// setup Vue filter
filter(Vue)

// whether to allow vue-devtools inspection
// false in production builds
Vue.config.devtools = process.env.NODE_ENV !== 'production'

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

export { app, router }
