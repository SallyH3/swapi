import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  describe('displayPeople', () => {
    let mockPeople;
    let wrapper;
    //mock fetch
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
      const mockUrl = 'https://swapi.co/api/people/';

      //execution
      wrapper.instance().displayPeople();

      //expectation

      expect(fetch).toHaveBeenCalledWith(mockUrl)
      
    });

    it.skip ('resets state on successful request', () => {

    });

    it.skip ('sets an error if fetch fails', () => {

    });
  })
})
