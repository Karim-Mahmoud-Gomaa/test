import axios from "axios";
import Cookies from "js-cookie";
import * as types from "../mutations_types";

// state
const state = {
    user: null,
    token: Cookies.get("token"),
    auth_err: null,
    orders: null,
    loading: false,
    isLogged: false
}

// getters
const getters = {
    user: state => state.user,
    orders: state => state.orders,
    token: state => state.token,
    check: state => state.isLogged,
    authError: state => state.auth_err,
    isLoading: state => state.loading
}

// mutations
const mutations = {
    [types.LOGIN](state) {
        state.loading = true;
        state.auth_err = null;
        state.isLogged = false;
    },
    [types.LOGIN_SUCCESS](state, { token,user,orders, rembmer }) {
        state.loading = false;
        state.auth_err = null;
        state.user = user;
        state.orders = orders;
        state.token = token;
        state.isLogged = true;
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
        Cookies.set("token", token, { expires: rembmer ? 365 : null });
    },
    [types.LOGIN_FAILED](state, { error }) {
        state.loading = false;
        state.auth_err = error;
        state.isLogged = false;
        axios.defaults.headers.common['Authorization'] = null
    },
    [types.FETCH_USER_SUCCESS](state, res) {
        state.user = res.user;        
        state.orders = res.orders?res.orders:null;        
        state.isLogged = true;
    },
    [types.FETCH_USER_FAILURE](state) {
        state.token = null;
        Cookies.remove("token");
        state.isLogged = false;
    },
    [types.LOGOUT](state) {
        state.user = null;
        state.orders = null;
        state.token = null;
        Cookies.remove("token");
        state.isLogged = false;
        axios.defaults.headers.common['Authorization'] = null
    }
};

// actions
const actions = {
    login({commit}) {
        commit(types.LOGIN);
    },
    logout({commit}) {
        commit(types.LOGOUT);
    },
    async fetchUser({commit}) {
        // let data = {headers: {Authorization: 'Bearer '+state.token}};
        axios.defaults.headers.common['Authorization'] = 'Bearer '+state.token
        await axios.get('/api/user').then(response => {
            commit(types.FETCH_USER_SUCCESS, response.data.success )
        }).catch((error) => {
            commit(types.FETCH_USER_FAILURE)
        });
    }
}

export default  {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
