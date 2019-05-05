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
        isLoading: true,
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

    it.skip('should invoke getSpecies', () => {
      window.fetch = jest.fn(() => (Promise.resolve(mockPeople)))
      let getSpecies = jest.fn();
      wrapper.instance().displayPeople();
      expect(getSpecies).toBeCalled();
    })
  });

  describe('getSpecies', () => {
    let wrapper;
    let mockData;
    let getSpecies;
    let fetchSpecies;
    let finalSpecies;
    beforeEach(() => {
      fetchSpecies = {name: 'human'};
      finalSpecies = [{name: 'Fred', species: 'human', category:'person'}, {name: 'Cindy', species: 'human', category:'person'}];
      mockData = [{name: 'Peaches'}, {name: 'Estes'}];
      getSpecies = jest.fn();

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(fetchSpecies)
      }));
      wrapper = shallow (
        <App />
      )
    });

    it.skip('should add species to each object in the people array', () => {
      //execution
  const result =  wrapper.instance().getSpecies(mockData)
  //expectation
  expect(result).toEqual(finalSpecies)
    })
  })

  describe('getHomeWorld', () => {
    let wrapper;
    let mockPeople;
    let mockData;
    beforeEach(() => {
      mockPeople = [
        {"name": "Luke Skywalker"},
        {"name": "C-3PO"}
      ];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPeople)
      }));
      wrapper = shallow (
        <App />
      )
    });

    it.skip('should add homeworld and population to each person object', async () => {

      //setup

      mockData = {results: [{"name": "Luke Skywalker"},
      {"name": "C-3PO"}]}
      let fetchData = {name: 'Nabooo', population: 500000};
      let resultData = [{name: 'Peaches', homeworld: 'Nabooo', population: 500000}, {name: 'Estes', homeworld: 'Nabooo', population: 500000}];
      window.fetch = jest.fn(() => (Promise.resolve(fetchData)))

      //execution

      const people = await wrapper.instance().getHomeworld(mockData)

      //expectation

      expect(people).toEqual(resultData)
    });
  });

    describe('componentDidMount', () => {
      let wrapper;
      let mockFilm;
      beforeEach(() => {
        mockFilm = {
          title: 'The Force Awakens', 
          year: '2015-12-11', 
          crawl: 'Luke Skywalker has vanished. In his absence, the sinisterFIRST ORDER has risen fromthe ashes of the Empire and will not rest until Skywalker, the last Jedi,has been destroyed. With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy. Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke\'s whereabouts....'};
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
              status: 200,
              json: () => Promise.resolve(mockFilm)
            }));
            wrapper = shallow (
              <App />
            )
        });
      
        it.skip('calls fetch with correct url', () => {
          //setup
          const expectedUrl = 'https://swapi.co/api/films/7'
          //execution
  
          wrapper.instance().componentDidMount()
  
          //expectation
  
          expect(fetch).toHaveBeenCalledWith(expectedUrl)
        })


        it('should set the state with current film', () => {
          //execution
      wrapper.setState({ currentFilm: mockFilm})
      wrapper.instance().componentDidMount().then()

      //expectation

      expect(wrapper.state('currentFilm')).toEqual(mockFilm)

        })
        
        it.skip('should display a film that scrolls on page load' , () => {
              wrapper.instance().componentDidMount();
              expect(wrapper.getCrawlFilmInfo).toEqual(mockFilm);
        })
  
      });
})
