import axios from "axios";
import AppointmentActionTypes from "./appointment.types";

export const loading = () => ({
    type: AppointmentActionTypes.LOADING,
});

export const failedAppointment = (error) => ({
    type: AppointmentActionTypes.FAILED_APPOINTMENT,
    payload: error,
})

export const addAppointment = (details) => dispatch => {
    const url = "https://cors-anywhere.herokuapp.com/https://docbook-backend.herokuapp.com/booking";
    dispatch(loading());
    axios
      .post(url,details)
      .then(response => {
        dispatch({
          type: AppointmentActionTypes.ADD_APPOINTMENT,
          payload: response.data,
        });
  
      })
      .catch(err => {
        dispatch(failedAppointment(err.response.data));
      })
  };