
const state = {
    photos: null,
    details: null,
    switchButton: 0
};

const getters = {
    photos: state => state.photos,
    details: state => state.details,
    switchButton: state => state.switchButton
};

const actions = {
    async addDetails({ commit }, details) {
        await commit('AD_DETAILS', details);
    },
    async addPhotos({ commit }, ad) {
        await commit('AD_PHOTOS', ad);
    },
};
const mutations = {
    AD_DETAILS(state, payload) {
        state.details = payload
        state.switchButton = 1
    },
    AD_PHOTOS(state, payload) {
        state.photos = payload
        state.switchButton = 2

    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}