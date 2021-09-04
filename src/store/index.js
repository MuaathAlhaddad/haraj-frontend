import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './Auth'
// import taxonomies from './modules/taxonomies'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        auth:true
    },
    mutations: {},
    actions: {},
    modules: {
        Auth
        // taxonomies
    },
    strict: debug,
})


