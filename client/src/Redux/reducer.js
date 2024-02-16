import {
  LOGIN,
  LOGOUT,
  REGISTER,
  GET_AUTH_USER,
  SET_USER_IMAGE,
  GET_SOCIETE,
  GET_EMPOLYE,
} from "./actionTypes";

const initialState = {
  empolye: null,
  societe: null,
  user: null,
  msg: null,
  profilPicture:null,
  token: localStorage.getItem("token"),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.newUser,
        msg: action.payload.msg,
        token: action.payload.token,
      };
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        msg: action.payload.msg,
        token: action.payload.token,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null, msg: null };
    case GET_AUTH_USER:
      return { ...state, user: action.payload.user };
    case SET_USER_IMAGE:
      // Update the state with the received image URL
      return { ...state, profilPicture: action.payload, };

    case GET_SOCIETE:
      return { ...state, societe: action.payload.result };
    case GET_EMPOLYE:
      return { ...state, empolye: action.payload.result };
    default:
      return state;
  }
};

export default reducer;
