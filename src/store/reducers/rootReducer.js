import { combineReducers } from "redux";
import signupReducer from "./signupReducer";
import loginReducer from "./logInReducer";

export default combineReducers({
    signupReducer,
    loginReducer
});