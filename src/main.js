import Vue from 'vue'
import App from './App.vue'
import customButton from '@/components/custom-button'

Vue.config.productionTip = false
Vue.component(customButton.name,customButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
