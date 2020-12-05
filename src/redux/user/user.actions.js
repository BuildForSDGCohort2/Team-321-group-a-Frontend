import axios from "axios";
import store from "store";
import swal from 'sweetalert';
import UserActionTypes from "./user.types";

import setAuthToken from "../config/baseUrl";

const token = store.get("token");

export const signInStart = () => ({
  type: UserActionTypes.SIGN_IN_START,
});

export const signInSuccess = ({username, password, history}) => dispatch => {
  dispatch(signInStart());
  axios
    .post('/accounts/login',{username, password}, setAuthToken(token))
    .then(response => {
      dispatch({
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: response.data,
      });

      store.set("token", response.data.token);
      history.push("dashboard/"+response.data.user.user_type);
      console.log(response)
    })
    .catch(err => {
      dispatch(signInFailure(err.response.data.detail));
      console.log(err.response)
    })
};

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});


export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START,
});

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
});

export const signUpSuccess = ({history, props})  => dispatch => {
  const url = "https://docbook-backend.herokuapp.com/register";
  dispatch(signUpStart())
  axios.post(url, props)
  .then((response) => {
    dispatch({
      type: UserActionTypes.SIGN_UP_SUCCESS,
      payload: response.data
    })

    swal("Success!", "Registration successful", "success");
    history.push("/signin")
  })
  .catch((error) => {
    dispatch(signUpFailure(error.response.data.username|| error.response.data.email))
  })
}
