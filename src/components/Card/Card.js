import React from 'react';

const Card = (props) => {
  const peopleInfo = props.people.map(person => {
    return <p className = 'people-name'>{person.name}</p>
  })
return (
  <section className = 'container'>
    <article className = 'people-info'>{peopleInfo}</article>
  </section>
)
}

export default Card;