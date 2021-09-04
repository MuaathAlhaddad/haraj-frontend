// initial state
// shape: [{ id, quantity }]
import gql from 'graphql-tag';

const state = () => ({
    icons: [
        "fa fa-car",
        "fa fa-desktop",
        "fa fa-home",
        "fa fa-tree",
        "fa fa-black-tie",
        "fa fa-car",
        "fa fa-desktop",
        "fa fa-home",
        "fa fa-tree",
        "fa fa-black-tie",
    ],
    selected: "",
    loadingAds: 0,
    harajs: [],
    brands: [],
    models: [],
    switchBrands: null,
    switchModels: null,
    selectedHaraj: null,
    selectedBrand: null,
    selectModel: null,
})

// getters
const getters = {

}

// actions
const actions = {
    selectedHaraj(haraj) {
        this.$emit("selectedHaraj", haraj);
    },
    getBrands(haraj) {
        this.selectModel = null;
        this.selectedHaraj = haraj;
        this.switchModels = false;
    },
    getModels(brand) {
        this.selectedBrand = brand;
        this.switchModels = true;
    },
}

// mutations
const mutations = {

}

export const typeDefs = gql`
    type Item {
        id: ID!
        text: String!
        done: Boolean!
    }
`;

// const apollo = {
//             ads: {
//                 query: allAds,
//                 loadingKey: "loadingAds",
//                 variables() {
//                     if (this.selectModel != null) {
//                         return {
//                             valueName: this.selectModel,
//                             operator: "LIKE",
//                         };
//                     } else {
//                         return {
//                             valueName: "%%",
//                             operator: "LIKE",
//                         };
//                     }
//                 },
//                 update(data) {
//                     return data;
//                 },
//             },
//             harajs: {
//                 query: allCategories,
//                 loadingKey: "loadingAds",
//                 update(data) {
//                     return data;
//                 },
//             },
//             brands: {
//                 query: allBrands,
//                 loadingKey: "loadingAds",
//
//                 variables() {
//                     return {
//                         catergoryName: this.selectedHaraj,
//                         operator: "LIKE",
//                     };
//                 },
//                 skip() {
//                     if (this.selectedHaraj == null) {
//                         return true;
//                     }
//                 },
//                 update(data) {
//                     if (this.selectedHaraj != null) {
//                         this.switchBrands = true;
//                         return data;
//                     }
//                 },
//             },
//             models: {
//                 query: allModels,
//                 loadingKey: "loadingAds",
//                 variables() {
//                     return {
//                         model: this.selectModel,
//                         operator: "LIKE",
//                     };
//                 },
//                 skip() {
//                     if (this.selectedBrand == null) {
//                         return true;
//                     }
//                 },
//                 update(data) {
//                     if (this.selectedBrand != null) {
//                         this.switchModels = true;
//                         return data;
//                     }
//                 },
//             },
//         }
// }

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}