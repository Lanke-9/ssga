import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentTitle: {
            currentBanner: 0,
            zh: '南京警察学院',
            en: 'Nanjing Municipal Public Security Bureau'
        }
    },
    mutations: {
        changeCurrent(state, payload){
            state.currentTitle = payload;
        }
    },
    actions: {},
    modules: {}
})
