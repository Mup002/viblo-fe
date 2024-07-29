import { config } from "@/config";
import axios from "axios";

const state = () => ({
    loginStatus: false,
    userProfile: {
        id: 0,
        role:"",
        avt_url:"",
        username: "",
        display_name: ""
    },
    logOut: false,
});
const getters = {
    getLoginApiStatus(state)
    {
        return state.loginStatus;
    },
    getUserProfile(state)
    {
        return state.userProfile;
    },
    getLogout(state)
    {
        return state.logOut;
    }
}

const actions = {
    async loginApi({commit},payload)
    {
        const response = await axios.post(`${config.api_url}/v1/login`, payload,{
            withCredentials: true,
            credentials : "include",
        })
        .catch((err)=>{
            console.log(err);
        });

        if(response && response.data){
            localStorage.setItem("isAuthenticated","true");
            commit("setLoginApiStatus",true);
            commit("setUserProfile",response.data.user)
        }else{
            commit("setLoginApiStatus",false)
            // commit('setUserProfile', {});
        }
    },

    async userLogout({commit}){
        const response = await axios.post(`${config.api_url}/logout`,{},{
            withCredentials: true,
            credentials: "include",
        })
        .catch((err)=>{
            console.log(err);
        });

        if(response && response.data)
        {
            commit("setLogout",true);
            commit("setLoginApiStatus",false)
            localStorage.clear();
            localStorage.removeItem("isAuthenticated");
        }else{
            commit("setLogout",false);
        }
    }
};

const mutations = {
    setLoginApiStatus(state,data)
    {
        state.loginStatus = data;
    },
    setLogout(state,payload)
    {
        state.logOut = payload;
    },
    setUserProfile(state,data)
    {
        const userProfile = {
            id: data.user_id,
            role: data.role,
            avt_url:data.avt_url,
            username:data.username,
            display_name:data.display_name
        }
        state.userProfile = userProfile;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    
}