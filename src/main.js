import Vue from 'vue'
import App from './App.vue'
import NewContador from './components/NewContador.vue'

Vue.config.productionTip = false
Vue.component('testeContador', NewContador) // nome que eu quero referenciar apontado para qual componente eu quero


new Vue({
  render: h => h(App),
}).$mount('#app')
