import React from 'react';

const Controls = ({ displayPeople }) => {
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

  export default Controls;