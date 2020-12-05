import axios from "axios";
import store from "store";
import swal from "sweetalert";
import AppointmentActionTypes from "./appointment.types";
import setAuthToken from "../config/baseUrl";



const token = store.get("token");

export const loading = () => ({
    type: AppointmentActionTypes.LOADING,
});

export const failedAppointment = (error) => ({
    type: AppointmentActionTypes.FAILED_APPOINTMENT,
    payload: error,
});

export const addAppointment = (details) => dispatch => {
    // const url = "https://cors-anywhere.herokuapp.com/https://docbook-backend.herokuapp.com/booking";
    dispatch(loading());
    axios
      .post("/booking",details, setAuthToken(token))
      .then(response => {
        dispatch({
          type: AppointmentActionTypes.ADD_APPOINTMENT,
          payload: response.data,
        });
  
        swal("Success!", "Appointment Booked Successfully", "success");
      })
      .catch(err => {
        dispatch(failedAppointment(err.response.data));
      })
  };