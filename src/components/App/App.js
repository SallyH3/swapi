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
      isLoading: false
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
    const url = `https://swapi.co/api/films/${randomFilm}`;
    fetch(url)
      .then(response => response.json())
      .then(film => this.getCrawlFilmInfo(film))
      .then(currentFilm => this.setState({ currentFilm }))
      .catch(error => console.log(error))
  }

  getHomeworld = (people) => {
    //when console.logging, it doesnt know what people is...says cannot read results of undefined, need to fix
    const getHomeworld = people.results.map(person => {
      return fetch(person.homeworld)
      .then(result => ({...person, homeworld: result.name, population: result.population}))
    })
    return Promise.all(getHomeworld)
  }

  //need to figure out how to get people correctly, this isnt working below...

  displayPeople = () => {
    const url = `https://swapi.co/api/people/`;
    fetch(url)
      .then(response => response.json())
      .then(people => this.getHomeworld(people))
      // .then(people => this.getSpecies)
      // .then(people => this.getPopulation)
      .then(people => this.setState({people: people}))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.displayPeople())
    const {title, year, crawl} = this.state.currentFilm;
    return (
      <div className="App">
        <Favorites />
        <Header />
        {/* adding displayPeople to controls below...fn still needs to be fixed */}
        <Controls displayPeople = {this.displayPeople}/>
        <Scroll
          title={title}
          year={year} 
          crawl={crawl} 
        />
        <Card />
      </div>
    );
  }
}

export default App;
