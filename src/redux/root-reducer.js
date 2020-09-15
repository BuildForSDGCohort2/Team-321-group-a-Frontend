import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dashboardReducer from './dashboard/dashboard.reducer';

const rootReducer = combineReducers({
  form: formReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
