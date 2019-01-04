import { errorMessage, successMessage } from '../../helpers/toast';

export const loginUrl =
  'https://sue-stack-db.herokuapp.com/api/v1/users/login';

export const runFetch = (dispatch, fetchObject) =>
  fetch(loginUrl, fetchObject)
    .then(res => res.json() )
    .then(data => {
      if (data.message === "You logged in successfully"){
        dispatch({
          type: 'LOGIN',
          payload: data
        });
        successMessage('You have been successfully logged in');

      } else if(data.message !== "You logged in successfully"){
        dispatch({
          type: 'LOGIN_MESSAGE',
          payload: data
        });

      }
    })
    .catch(error => {

      dispatch({
        type: 'LOGIN_ERROR',
        payload: error
      });
      errorMessage(error.message);
    });

const login = logInData => {
  const fetchObject = {
    method: 'POST',
    mode: 'cors',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(logInData)
  };
  return dispatch => {
    runFetch(dispatch, fetchObject);
  };
};


export default login;
