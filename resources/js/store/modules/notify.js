import axios from "axios";
// import Cookies from "js-cookie";
// import * as types from "../mutations_types";

// state
const state = {
    firstTime: true,
    client_payments: [],
}

// getters
const getters = {
    client_payments: state => state.client_payments,
}
// mutations
const mutations = {
    setData(state, res) {
        state.client_payments = res;        
    },
    setFirstTime(state, res) {
        state.firstTime = res;        
    },
};

// actions
const actions = {
    async set_notify({commit}) {
        axios.get('/api/late_payments').then(({data}) => {
            commit("setData",data.success.client_payments )

        })
    },
    async setNotifyFirstTime({commit}) {
        if(state.firstTime){
            axios.get('/api/late_payments').then(({data}) => {
                commit("setFirstTime",false)
                commit("setData",data.success.client_payments )
            })
        }
    }
}

export default  {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
