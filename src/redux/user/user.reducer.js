import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: {username:'uche', user_type: 'patient' },
  error: null,
  isLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
      case UserActionTypes.SIGN_UP_START:
        return {
          ...state,
          isLoading: true,
          error: null
        };
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isLoading: false
      };
    // case UserActionTypes.SIGN_OUT_SUCCESS:
    //   return {
    //     ...state,
    //     currentUser: null,
    //     error: null
    //   };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case UserActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        currentUser: action.payload
      };
    
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
