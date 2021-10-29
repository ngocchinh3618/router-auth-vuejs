import Vue from "vue";
import Vuex from "vuex";
import stations from "./modules/station"
import auth from "./modules/auth"
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    station: stations,
    auth:auth
  }
})