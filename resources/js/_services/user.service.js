import  Api from "./Api";
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
   return Api().post("login",{username,password})
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    console.log("welcom")
    return  Api().get("all")
}
