import React from 'react';

const Card = (props) => {
  const peopleInfo = props.people.map(person => {
    return (
    <section className = 'people-display-info'>
      <p className='people-name'>{person.name}</p>
      <p className='people-species'>{person.species}</p>
    </section>
    )
  })
return (
  <section>
    <article className = 'people-info'>{peopleInfo}</article>
  </section>
)
}

export default Card;