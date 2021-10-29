import {apiLogin} from "./../../api";
import router from "./../../router";
import setHeader from "./../../utils/setHeader";
import jwtDecode from "jwt-decode";

const state = {
  token: null,
  err:null,
  loading:false
};
const mutations = {
  storeRequestLogin(state){
    state.token = null;
    state.err = null;
    state.loading = true;
  },
  storeLoginSuccess(state,token){
    state.token = token;
    state.err = null;
    state.loading = false;
  },
  storeLoginFalse(state,err){
    state.token = null;
    state.err = err;
    state.loading = false;
  },
  clearAuthData(state){
    state.token = null; 
    state.err = null;
    state.loading = false;
  },
};
const actions = {
  setLogoutTimer({commit, dispatch}, expirationTime){
    setTimeout(()=>{
      commit("clearAuthData");
      dispatch("logout");
    }, expirationTime);
  },
  login({commit, dispatch}, authData){
    commit("storeRequestLogin");
    apiLogin.post("/login",{email:authData.email, password:authData.password}).then(result =>{
      const decoded = jwtDecode(result.data.accessToken);
      if(decoded.userType === "client")
      return Promise.reject({
        Response:{data:{message:"Bạn không có quyền truy cập "}}
      });
      const expirationDate = decoded.exp;
      localStorage.setItem("token", result.data.accessToken);
      localStorage.setItem("expirationDate", expirationDate);
      setHeader(result.data.accessToken);
      commit("storeLoginSuccess",result.data.accessToken);
      dispatch("setLogoutTimer",expirationDate);
      router.replace("/admin/dashboard");
    }).catch(err=>{
      commit("storeLoginFailed", err.response.data);
    });
  },
  logout({commit}){
    commit("clearAuthData");
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    router.replace("/auth");
  },
  tryAuthLogin({commit, dispatch}){
    const token = localStorage.getItem("token");
    if(!token){
      return;
    }
    setHeader(token);
    let expirationDate = localStorage.getItem("token");
    const now = new Date();
    if(now.getTime()/1000 >= expirationDate){
      dispatch("logout");
      return;
    }
    commit("storeLoginSuccess",token);
  },
};

export default {state, mutations, actions}