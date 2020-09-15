import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import dashboardReducer from './dashboard/dashboard.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
