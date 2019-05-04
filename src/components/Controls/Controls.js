import React from 'react';

const Controls = ({ displayPeople, people }) => {
  // let result;
  // if(people.length === 0) {
  //   result = <p className='people-loader'>Loading...</p>
  // } 
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
          {/* {result} */}
      </section>
    )
  }

  export default Controls;