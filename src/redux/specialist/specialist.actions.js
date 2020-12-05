import axios from "axios";
import store from "store";
import SpecialistActionTypes from "./specialist.types";
import setAuthToken from "../config/baseUrl";

const token = store.get("token");

export const getSpecialists = () => dispatch => {
    axios
      .get("/specialists", setAuthToken(token))
      .then(response => {
        dispatch({
          type: SpecialistActionTypes.GET_SPECIALIST,
          payload: response.data,
        });
  
      })
  };
