import Vue from 'vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    data : {
        currentRoute : window.location.pathname
    },
    computed : {
        ViewComponent () {
            return router[this.currentRoute]
        }
    },
    render (h) {
        return h(this.ViewComponent)
    }
}).$mount('#app')
