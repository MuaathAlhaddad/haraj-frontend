const state = {
    user: {},
    authStatus: false,
    token: localStorage.getItem("apollo-token") || null
};
const getters = {
    user: state => state.user,
    authStatus: state => !!state.token,
    isAuth: state => state.authStatus,


};
const actions = {
    login({ commit }, userData) {
        commit('LOGIN_USER', {
            user: userData
        });
        commit('SET_TOKEN', '12123236551');
    },
    // eslint-disable-next-line no-unused-vars
    logout({ commit }) {

        commit('LOGOUT');

    }
};
const mutations = {
    LOGIN_USER(state, payload) {
        state.user = payload.user;
        state.authStatus = true;
    },
    SET_TOKEN(state, payload) {
        state.authStatus = payload;
    },
    LOGOUT(state) {
        state.user = {};
        state.authStatus = false;
        state.token = null;
    }
};



export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}