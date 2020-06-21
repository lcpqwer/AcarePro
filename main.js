import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import Back from './components/back.vue'
Vue.component('Back',Back)
const app = new Vue({
    ...App
})
app.$mount()