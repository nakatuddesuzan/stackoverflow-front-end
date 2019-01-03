const signUpReducer = (state, action) => {
    switch (action.type) {
    case "SIGNUP":{
      if (action.payload) {
        return {
          ...state,
          message: action.payload.success
        };
      }};
  
    case "SIGNUP_ERROR":{
      if (action.payload) {
        return {
          ...state,
          errors: action.payload
        };
      }};
  
    default:
      return state;
    }
  };
  
  const initialState = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",

  };
  
  export default (state = initialState, action) => (signUpReducer(state, action));