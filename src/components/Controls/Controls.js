import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className='button-container'>
        <input 
          value='People'
          type='submit'
          className='btn people'
          // onClick= {this.displayPeople}
          />
        <input 
          value='Planets'
          type='submit'
          className='btn planets'
          // onClick={this.displayPeople}
          />
        <input 
          value='Vehicles'
          type='submit'
          className='btn vehicles'
          // onClick={this.displayVehicles}
          />
    {/* add button for favorites */}
      </section>
    )
  }
}