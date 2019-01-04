import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import expect from 'expect';
import configureStore from 'redux-mock-store';

import login, { loginUrl } from './logInActions';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const dataObject = {
  data: {
    user: {
      username: 'sue',
      email: 'sue@gmail.com',
      password: 'password'
    }
  }
};

describe(' login actions ', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch login api endpoint', () => {
    fetchMock.post(loginUrl, dataObject.data);
    const store = mockStore({ item: {} });
    store.dispatch(login(dataObject.data));
    expect(store.getActions()).toEqual([]);
    expect(store.getActions()).toEqual([]);
  });
});
