
const state = {
    messages: null,
    notificationCount: null,
    commentsNoti: null
};

const getters = {
    notificationCount: state => state.notificationCount + state.commentsNoti,
    commentsNoti: state => state.commentsNoti
};

const actions = {
    async getNullAtSeen({ commit }, notifications) {
        await commit('GET_NULL_AT_SEEN', notifications);
    },
    async getCommentsNullAtSeen({ commit }, comments) {
        await commit('GET_COMMENTS_NULL_AT_SEEN', comments);
    },
};
const mutations = {
    GET_NULL_AT_SEEN(state, payload) {
        state.notificationCount = payload
    },
    GET_COMMENTS_NULL_AT_SEEN(state, payload) {
        state.commentsNoti = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}