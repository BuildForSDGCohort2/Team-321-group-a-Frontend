import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appointmentReducer from "./appointment/appointment.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""]
};

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  appointment: appointmentReducer
});

export default persistReducer(persistConfig, rootReducer)
