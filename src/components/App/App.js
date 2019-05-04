import React, { Component } from 'react';
import './_App.scss';
import Favorites from '../Favorites/Favorites';
import Header from '../Header/Header';
import Controls from '../Controls/Controls';
import Scroll from '../Scroll/Scroll';
import Card from '../Card/Card';

class App extends Component {
  constructor() {
    super();
    this.state={
      currentFilm: {
        title: '',
        year: '',
        crawl: ''
      },
      people: [],
      isLoading: false,
      errorStatus: ''
    }
  }
  
  getRandomFilm = () => {
    return Math.floor((Math.random() * 7) + 1);
  }
  
  getCrawlFilmInfo = (film) => {
    return {
      title: film.title,
      year: film.release_date,
      crawl: film.opening_crawl
    }
  }

  componentDidMount = () => {
    const randomFilm = this.getRandomFilm();
    const url = `https://swapi.co/api/films/${ randomFilm }`;
    fetch(url)
      .then(response => response.json())
      .then(film => this.getCrawlFilmInfo(film))
      .then(currentFilm => this.setState({ currentFilm }))
      .catch(error => this.setState({
        errorStatus: error.message
      }))
  }

  getSpecies = (data) => {
    const species = data.map(person => {
      return fetch(person.species)
      .then(response => response.json())
      .then(result => {
        const newPerson = { ...person, species: result.name }
        return newPerson
      })
    })
    return Promise.all(species)
  }

  getHomeworld = (people) => {
    const getHomeworld = people.map(person => {
      return fetch(person.homeworld)
      .then(response => response.json())
      .then(result => {
        const finalPerson = {
          ...person, 
          homeworld: 
          result.name, 
          population: result.population
      }
      return finalPerson;
    });
    })
    return Promise.all(getHomeworld)
  }

  displayPeople = () => {
    const url = `https://swapi.co/api/people/`;
    return fetch(url)
    .then(response => response.json())
    .then(people => this.getSpecies(people.results))
    .then(people => this.getHomeworld(people))
    .then(people => this.setState({ people: people }))
    .catch(error => this.setState({
      errorStatus: error.message
    }))
  }

  render() {
    const { title, year, crawl } = this.state.currentFilm;
    return (
      <div className='App'>
        <Favorites />
        <Header />
        <Controls displayPeople = {this.displayPeople}
                  people={this.state.people}
        />
        { this.state.people.length ? 
          <Card people={ this.state.people } /> : 
          <Scroll 
            title={ title }
            year={ year } 
            crawl={ crawl } /> } 
      </div>
    );
  }
}

export default App;
