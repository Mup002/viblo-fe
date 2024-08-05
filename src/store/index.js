import {createStore} from "vuex";
import authModules from "./modules/auth";
import createPersistedState from 'vuex-persistedstate';
const store = createStore({
    modules: {
        auth: authModules
    },
    plugins: [createPersistedState({
        storage: window.localStorage
    })]
})

export default store;