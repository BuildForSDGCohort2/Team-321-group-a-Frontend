import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import dashboardReducer from "./dashboard/dashboard.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  dashboard: dashboardReducer,
});

export default persistReducer(persistConfig, rootReducer)
