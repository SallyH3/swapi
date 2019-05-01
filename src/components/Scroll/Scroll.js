import React from 'react';

export default function Scroll (props) {
  return (
    <section className='scroll-container'>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.crawl}</p>
    </section>
  )
}