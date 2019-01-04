import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedSignUp from './SignUp';
import { SignUp, mapDispatchToProps } from './SignUp';

jest.mock('react-notify-toast');

const initialState = {
  signupData: {
    username: '',
    email: '',
    password: ''
  }
};

describe('signup tests', () => {
  const preventDefault = jest.fn();
  let wrapper;

  it('should render signup component', () => {
    wrapper = shallow(<ConnectedSignUp signUp={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render signup component', () => {
    const mock = jest.fn();
    const mapper = mapDispatchToProps(mock);
    mapper.signUp(initialState);
    expect(mock).toHaveBeenCalled();
  });

  const editor = mount(<SignUp signUp={jest.fn()} />);
  it('should render the onchange', () => {
    expect(
      editor.find("[name='username']").simulate('change', {
        target: { name: 'username', value: 'susan' }
      })
    );
  });

  it('should should submit on a button click', () => {
    expect(editor.find('button').simulate('click', { preventDefault }));
    expect(preventDefault).toBeCalled();
  });

});
