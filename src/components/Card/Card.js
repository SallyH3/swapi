import React from 'react';

const Card = (props) => {
  const peopleInfo = props.people.map(person => {
    return <p>{person.name}</p>
  })
return (
  <section>
    <article className = 'people'>{peopleInfo}</article>
  </section>
)
}

export default Card;