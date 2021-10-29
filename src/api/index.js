import axios from "axios";
export const api = axios.create({
  baseURL:"https://60a675f2b970910017eb1ad2.mockapi.io/"
});
export const apiLogin = axios.create({
  baseURL:"http://localhost:3000/"
})