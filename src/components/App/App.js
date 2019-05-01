import React, { Component } from 'react';
import './_App.scss';
import Header from '../Header/Header';
import Controls from '../Controls/Controls';
import Scroll from '../Scroll/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state={
      currentFilm: {
        title: '',
        year: 0,
        crawl: ''
      }
    }
  }

  getRandomFilm = () => {
    return Math.floor((Math.random() * 7) + 1);
  }

  getFilmInfo = (film) => {
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
      .then(film => this.getFilmInfo(film))
      .then(currentFilm => this.setState({ currentFilm }))
      .catch(error => console.log(error))
  }

  render() {
    const {title, year, crawl} = this.state.currentFilm;
    return (
      <div className="App">
        <Header />
        <Controls />
        <Scroll
          title={title}
          year={year} 
          crawl={crawl} 
        />
      </div>
    );
  }
}

export default App;
