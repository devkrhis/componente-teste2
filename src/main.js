import Vue from 'vue'
import App from './App.vue'
import NewContadorGlobal from './components/NewContadorGlobal.vue'

Vue.config.productionTip = false
Vue.component('testeContadorGlobal', NewContadorGlobal) // nome que eu quero referenciar apontado para qual componente eu quero


new Vue({
  render: h => h(App),
}).$mount('#app')
