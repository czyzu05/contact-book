import { contactReducer } from "./contactReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  contact: contactReducer,
});
