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

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have default state', () => {
      expect(wrapper.state()).toEqual({
        currentFilm: {
          title: '',
          year: '',
          crawl: ''
        },
        people: [],
        isLoading: false,
        errorStatus: ''
      })
    })

    it('calls fetch with correct url', () => {
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
      wrapper.instance().displayPeople().then()

      //expectation

      expect(wrapper.state('people')).toEqual(mockPeople)

    });

    it.skip('sets an error if fetch fails', () => {
      //setup
      window.fetch = jest.fn().mockImplementationOnce(() => {
        Promise.reject(
          new Error('The fetch failed')
        )
      })

      //execution
      wrapper.instance().displayPeople().then(() => {
        //expectation
        expect(wrapper.state('errorStatus')).toBe('The fetch failed')
      })

    });
  });
  describe('getHomeWorld', () => {
    let wrapper;
    beforeEach(() => {
      const mockPeople = [
        {"name": "Luke Skywalker", "population": "200000"},
        {"name": "C-3PO", "population": "200000"}
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        Promise.resolve({
          status: 200,
          json: () => {
            Promise.resolve(mockPeople)
          }
        })
      })
      wrapper = shallow(
        <App />
      )
    });
    it.skip('returns a finalPerson with a homeworld', () => {
      //setup
      const getHomeWorld = []
    })

    it.skip('should display a film that scrolls on page load' , () => {

    })
  });
})
