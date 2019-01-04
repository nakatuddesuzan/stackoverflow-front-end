import { errorMessage } from '../../helpers/toast';

const signUpReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP': {
      if (action.payload) {
        window.location.replace("/login")
        return {
          ...state,
          message: action.payload.success
        };
      }
    }

    case 'SIGNUP_ERROR': {
      if (action.payload) {
        return {
          ...state,
          errors: action.payload
        };
      }
    }
    case 'SIGNUP_MESSAGE': {
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
  username: '',
  email: '',
  password: ''
};

export default (state = initialState, action) => signUpReducer(state, action);
