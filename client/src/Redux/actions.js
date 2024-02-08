import { LOGIN, LOGOUT, REGISTER, GET_AUTH_USER } from "./actionTypes";
import axios from "axios"

export const register = (newUser) => async (dispatch) => {
    try {
        const res = await axios.post("/users/register", newUser)
        dispatch({type: REGISTER, payload: res.data})
    } catch (err) {
        console.error(err)
    }
}

export const login = (formData) => async (dispatch) => {
    try{
        const res = await axios.post("/users/login", formData)
        dispatch({type: LOGIN, payload: res.data})
    } catch (err) {
        console.error(err)
    }
}

export const get_auth_user = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                autorisation: localStorage.getItem("token")
            }
        }
        const res = await axios.get("/users/isAuth", config)
        dispatch({type: GET_AUTH_USER, payload: res.data})
    } catch (err) {
        console.error(err)
    }
}

export const logout = () => (dispatch) => {
    dispatch({type: LOGOUT})
}