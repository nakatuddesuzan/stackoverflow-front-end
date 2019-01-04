import { errorMessage, successMessage } from '../../helpers/toast';

export const signUpUrl =
  'https://sue-stack-db.herokuapp.com/api/v1/users/signup';

export const runFetch = (dispatch, fetchObject) =>
  fetch(signUpUrl, fetchObject)
    .then(res => res.json())
    .then(data => {
      if (data.message === "Successfully registered"){
        dispatch({
          type: 'SIGNUP',
          payload: data
        });
        successMessage('You have been successfully registered ');
      }
      else if(data.message !== "Successfully registered"){
        dispatch({
          type: 'SIGNUP_MESSAGE',
          payload: data
        });

      }
     
    })
    .catch(error => {
      dispatch({
        type: 'SIGNUP_ERROR',
        payload: error
      });
      errorMessage(error.message);
    });

const signup = signupData => {
  const fetchObject = {
    method: 'POST',
    mode: 'cors',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(signupData)
  };
  return dispatch => {
    runFetch(dispatch, fetchObject);
  };
};

export default signup;
