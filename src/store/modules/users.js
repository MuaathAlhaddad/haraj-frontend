
const state = {
    user_Details: null,
    userPhone_no: null,
    otpNumber: null,

};

const getters = {
    user_Details: state => state.user_Details,
    userPhone_no: state => state.userPhone_no,
    otpNumber: state => state.otpNumber,
};

const actions = {
    async user_Details({ commit }, details) {
        await commit("USER_DETAILS", details)
    },
    async userPhone_no({ commit }, phone_no) {
        await commit("USER_PHONE", phone_no)
    },
    async otpNumber({ commit }, otp) {
        await commit("USER_OTP", otp)
    },

};
const mutations = {
    USER_DETAILS(state, payload) {
        state.user_Details = payload
    },
    USER_PHONE(state, payload) {
        state.userPhone_no = payload
    },
    USER_OTP(state, payload) {
        state.otpNumber = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}