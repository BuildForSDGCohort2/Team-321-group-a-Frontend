import axios from "axios";
import store from "store";
import UserActionTypes from "./user.types";

export const signInStart = () => ({
  type: UserActionTypes.SIGN_IN_START,
});

export const signInSuccess = ({username, password, history}) => dispatch => {
  const url = "https://cors-anywhere.herokuapp.com/https://docbook-backend.herokuapp.com/login";
  dispatch(signInStart());
  axios
    .post(url,{username, password})
    .then(response => {
      dispatch({
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: response.data,
      });

      history.push("dashboard/"+response.data.user.user_type)
    })
    .catch(err => {
      dispatch(signInFailure(err.response.data.detail));
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
  const url = "https://cors-anywhere.herokuapp.com/https://docbook-backend.herokuapp.com/register";
  dispatch(signUpStart())
  axios.post(url, props)
  .then((response) => {
    dispatch({
      type: UserActionTypes.SIGN_UP_SUCCESS,
      payload: response.data
    })

    history.push("/signin")
  })
  .catch((error) => {
    dispatch(signUpFailure(error.response.data.username|| error.response.data.email))
  })
}
