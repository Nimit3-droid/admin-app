/* eslint-disable import/no-anonymous-default-export */
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

export default rootReducer;
