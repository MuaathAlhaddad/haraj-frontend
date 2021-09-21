import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './Auth'
import Notification from './modules/notification.js'
Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'
export const strict = false

export default new Vuex.Store({
    state: {
        auth: true
    },
    mutations: {},
    actions: {},
    modules: {
        Auth,
        Notification
    },
    // strict: debug,
})


