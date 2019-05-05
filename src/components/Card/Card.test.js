import React from 'react';
import Card from './Card';
import { shallow }  from 'enzyme';

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card />
    )
  })
  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})