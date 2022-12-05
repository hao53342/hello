import Vue from 'vue'
import App from './App'
import mixin from './mixin/mixin'
import store from './store/store'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

Vue.mixin(mixin)
const app = new Vue({
    ...App
})
app.$mount()
