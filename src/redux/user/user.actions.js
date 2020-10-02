import axios from "axios";
import UserActionTypes from "./user.types";

export const SignInStart = () => ({
  type: UserActionTypes.SIGN_IN_START,
});

export const SignInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  paylodad: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const setCurrentUser = () => ({
  type: UserActionTypes.SET_CURRENT_USER,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START,
});

// export const signUpSuccess = user => dispatch => {
//   dispatch(signUpStart());
//   axios
//   .post('https://cors-anywhere.herokuapp.com/https://herokutestm3dus2.herokuapp.com/api/users/', user)
//   .then(res =>
//     dispatch({
//       type: UserActionTypes.SIGN_UP_SUCCESS,
//       payload: res.data
//     }))
//   .catch(err => {
//     SignInFailure(err);
//   });
// };

export const signUpSuccess = user => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user
});

export const signUpFailure = (error) => (dispatch) => {
  dispatch({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
  });
};
