import React from 'react';

const Card = ({ people }) => {
  const peopleInfo = people.map(person => {
    return (
    <section className = 'people-display-info'>
      <p className='people-name'>{ person.name }</p>
      <p className='species'>Species: { person.species }</p>
      <p className='homeworld'>Homeworld: { person.homeworld }</p>
      <p className='population'>Population: { person.population }</p>
    </section>
    )
  })
return (
  <section>
    <article className = 'people-info-container'>{ peopleInfo }</article>
  </section>
)
}

export default Card;