import AppointmentActionTypes from "./appointment.types";

const INITIAL_STATE = {
  appointments: [],
  isLoading: false,
  error: null,
};

const appointmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppointmentActionTypes.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case AppointmentActionTypes.GET_APPOINTMENT:
      return {
        ...state,
        appointments: action.payload,
        loading: false,
        error: null,
      };
    case AppointmentActionTypes.GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
        isLoading: false,
        error: null,
      };
    case AppointmentActionTypes.ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [action.payload, ...state.appointments],
        isLoading: false,
        error: null,
      };
    case AppointmentActionTypes.DELETE_APPOINMENT:
      return {
        ...state,
        appointments: state.appointments.message.filter(({ _id }) => _id !== action.payload),
        loading: false,
        error: null,
      };
      case AppointmentActionTypes.FAILED_APPOINTMENT:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default appointmentReducer;
