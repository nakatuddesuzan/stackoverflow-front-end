import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import expect from 'expect';
import configureStore from 'redux-mock-store';

import signup, { signUpUrl } from './signUpActions';


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

describe(' sigup actions ', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch signup api endpoint', () => {
    fetchMock.post(signUpUrl, dataObject.data);
    const store = mockStore({ item: {} });
    store.dispatch(signup(dataObject.data));
    expect(store.getActions()).toEqual([]);
    expect(store.getActions()).toEqual([]);
  });
});
