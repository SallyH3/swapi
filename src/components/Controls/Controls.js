import React from 'react';

const Controls = (props) => {
    return (
      <section className='button-container'>
        <input 
          value='people'
          type='submit'
          className='btn people'
          onClick= {props.displayPeople}
          />
        <input 
          value='planets'
          type='submit'
          className='btn planets'
          onClick={props.displayPeople}
          />
        <input 
          value='vehicles'
          type='submit'
          className='btn vehicles'
          onClick={props.displayPeople}
          />
    {/* add button for favorites */}
      </section>
    )
  }

  export default Controls;