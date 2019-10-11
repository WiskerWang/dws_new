import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navAsideCollapse: false
    },
    mutations: {
        handleNavAside(state) {
            state.navAsideCollapse = !state.navAsideCollapse;
        }
    },
    actions: {

    }
})
