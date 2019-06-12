import Vue from 'vue'
import StreamerApp from './StreamerApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(StreamerApp),
}).$mount('#aroot')
