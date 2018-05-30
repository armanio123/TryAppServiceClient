import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { templateReducer } from "./TemplatesReducer";

export default combineReducers({ loginState: loginReducer, templatesState: templateReducer });