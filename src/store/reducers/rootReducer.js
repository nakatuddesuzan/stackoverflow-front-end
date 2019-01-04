import { combineReducers } from "redux";
import signupReducer from "./signUpReducer";
import loginReducer from "./logInReducer";

export default combineReducers({
    signupReducer,
    loginReducer
});