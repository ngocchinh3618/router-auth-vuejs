import {apiLogin} from "../api";
const setHeader = token =>{
  if(token){
    apiLogin.defaults.headers.common["token"]=token;
  }else{
    delete apiLogin.defaults.headers.common["token"];
  }
};
export default setHeader;