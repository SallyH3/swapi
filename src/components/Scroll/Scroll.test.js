import React from 'react';
import Scroll from './Scroll';
import { shallow } from 'enzyme';

describe('Scroll', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Scroll />
    )
  });
  it ('should match snapshot', () => {
    expect (wrapper).toMatchSnapshot();
  });
})