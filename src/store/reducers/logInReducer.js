import { errorMessage } from '../../helpers/toast';

const logInReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      if (action.payload) {
        window.location.replace("/profile")
        return {
          ...state,
          message: action.payload.success
        };
      }
    }

    case 'LOGIN_ERROR': {
      if (action.payload) {

        return {
          ...state,
          errors: action.payload
        };
      }
    }
    case 'LOGIN_MESSAGE': {
      if (action.payload) {
        errorMessage(action.payload.message);

        return {
          ...state,
          errors: action.payload
        };
      }
    }

    default:
      return state;
  }
};

const initialState = {
  email: '',
  password: ''
};

export default (state = initialState, action) => logInReducer(state, action);
