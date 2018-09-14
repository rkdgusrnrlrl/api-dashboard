import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
