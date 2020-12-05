import SpecialistActionTypes from "./specialist.types";

const INITIAL_STATE = {
    specialist: [],
    isLoading: false,
};

const specialistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SpecialistActionTypes.GET_SPECIALIST:
        return {
          ...state,
          specialist: action.payload
        };

    default:
      return state;
  }
};

export default specialistReducer;
