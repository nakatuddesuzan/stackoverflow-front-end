import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Login tests', () => {
  let wrapper;

  it('should render home component', () => {
    wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});