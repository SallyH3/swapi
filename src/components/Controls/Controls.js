import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ displayPeople, people }) => {
    return (
      <section className='button-container'>
        <input 
          value='people'
          type='submit'
          className='btn people'
          onClick= { displayPeople }
          />
        <input 
          value='planets'
          type='submit'
          className='btn planets'
          // onClick={ displayPlanets }
          />
        <input 
          value='vehicles'
          type='submit'
          className='btn vehicles'
          // onClick={ displayVehicles }
          />
      </section>
    )
  }

  Controls.propTypes = {
    displayPeople: PropTypes.func,
    people: PropTypes.array
  }

  export default Controls;