import { errorMessageessage, successMessage } from '../../helpers/toast';

export const signUpUrl =
  'https://sue-stack-db.herokuapp.com/api/v1/users/signup';

export const runFetch = (dispatch, fetchObject) =>
  fetch(signUpUrl, fetchObject)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'SIGNUP',
        payload: data
      });
      successMessage('You have been successfully registered ');
    })
    .catch(message => {
      dispatch({
        type: 'SIGNUP_ERROR',
        payload: message
      });
      errorMessage(message);
    });

const signup = signupData => {
  console.log({ signupData });
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
