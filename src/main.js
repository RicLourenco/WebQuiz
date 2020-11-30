import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(cookies);

new Vue({
  cookies,
  router,
  render: h => h(App)
}).$mount('#app')
