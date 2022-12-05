import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        systemInfo: null
    },

    mutations: {
        // 写入 systemInfo
        setSystemInfo(state, data) {
            state.systemInfo = data
        }
    }
})
