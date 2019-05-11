import Vue from 'vue'
import App from './App.vue'
import router from './routes'

// CSS Vendors
import 'normalize.css'
import '@assets/css/flexgrid.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
