import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { templateReducer, trialReducer } from "./TemplatesReducer";

export default combineReducers({ loginState: loginReducer, templatesState: templateReducer, trialState: trialReducer });