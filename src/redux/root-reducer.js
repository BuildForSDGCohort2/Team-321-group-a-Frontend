import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";


import specialistReducer from "./specialist/specialist.reducer";
import appointmentReducer from "./appointment/appointment.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  appointment: appointmentReducer,
  specialist: specialistReducer,
});

export default rootReducer;
