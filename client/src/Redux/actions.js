import {
  LOGIN,
  LOGOUT,
  REGISTER,
  GET_AUTH_USER,
  SET_USER_IMAGE,
  GET_SOCIETE,
  GET_EMPOLYE,
} from "./actionTypes";
import axios from "axios";

export const register = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post("/users/register", newUser);
    dispatch({ type: REGISTER, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", formData);
    dispatch({ type: LOGIN, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const get_auth_user = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        autorisation: localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/users/isAuth", config);
    dispatch({ type: GET_AUTH_USER, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const fetchUserImage = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/users/images/${userId}`);
      const profilPicture = response.data.profilPicture;
      dispatch({ type: SET_USER_IMAGE, payload: profilPicture });
    } catch (error) {
      // Handle any errors if needed
      console.error("Error fetching user image:", error);
    }
  };
};

export const get_societe = () => (dispatch) => {
  axios
    .get("/admin/getsociete")
    .then((res) => dispatch({ type: GET_SOCIETE, payload: res.data }))
    .catch((err) => console.error(err));
};
export const get_employe = () => (dispatch) => {
  axios
    .get("/admin/getempolye")
    .then((res) => dispatch({ type: GET_EMPOLYE, payload: res.data }))
    .catch((err) => console.error(err));
};

export const updatesociete = (id_societe, updetedsociete) => (dispatch) => {
  axios
    .put(`/admin/updatesociete/${id_societe}`, updetedsociete)
    .then((res) => dispatch(get_societe()))
    .catch((err) => console.error(err));
};
export const updateempolye = (id_empolye, updetedempolye) => (dispatch) => {
  axios
    .put(`/admin/updateempolye/${id_empolye}`, updetedempolye)
    .then((res) => dispatch(get_employe()))
    .catch((err) => console.error(err));
};

export const deletesociete = (id_societe) => (dispatch)=> {
    axios.delete(`/admin/deleteuser/${id_societe}`)
    .then((res) => dispatch(get_societe()))
    .catch((err) => console.error(err))
    }
    export const deleteempolye = (id_empolye) => (dispatch)=> {
        axios.delete(`/admin/deleteuser/${id_empolye}`)
        .then((res) => dispatch(get_employe()))
        .catch((err) => console.error(err))
        }