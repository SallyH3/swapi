import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  describe('displayPeople', () => {
    let mockPeople;
    let wrapper;
    beforeEach(() => {
      mockPeople = [
        {"name": "Luke Skywalker", "population": "200000"},
        {"name": "C-3PO", "population": "200000"}
      ];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPeople)
      }));
      wrapper = shallow (
        <App />
      )
    });

    it ('calls fetch with correct url', () => {
      //setup
      const expectedUrl = 'https://swapi.co/api/people/';

      //execution
      wrapper.instance().displayPeople();

      //expectation

      expect(fetch).toHaveBeenCalledWith(expectedUrl)
      
    });

    it('resets state on successful request', () => {
      //execution
      wrapper.setState({people: mockPeople})
      wrapper.instance().displayPeople()

      //expectation

      expect(wrapper.state('people')).toEqual(mockPeople)

    });

    it.skip ('sets an error if fetch fails', () => {

    });
  })
})
