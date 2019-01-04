import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedLogIn from './Login';
import { LogIn, mapDispatchToProps } from './Login';

jest.mock('react-notify-toast');

const initialState = {
  logInData: {
    email: '',
    password: ''
  }
};

describe('Login tests', () => {
  const preventDefault = jest.fn();
  let wrapper;

  it('should render login component', () => {
    wrapper = shallow(<ConnectedLogIn logIn={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should  call logIn', () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.logIn(initialState);
    expect(mock).toHaveBeenCalled();
  });

  const editor = mount(<LogIn logIn={jest.fn()} />);
  it('should render the onchange', () => {
    expect(
      editor.find("[name='email']").simulate('change', {
        target: { name: 'email', value: 'susan@gmail.com' }
      })
    );
  });

  it('should should submit on a button click', () => {
    expect(editor.find('button').simulate('click', { preventDefault }));
    expect(preventDefault).toBeCalled();
  });
});
