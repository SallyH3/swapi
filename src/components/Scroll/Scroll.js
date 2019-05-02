import React from 'react';

export default function Scroll (props) {
  return (
    <section className='scroll-container'>
      <section className='crawl'>
        <p className='text crawl'>{props.crawl}</p>
        <h3 className='scroll-title'>{props.title}</h3>
        <p className='text year'>{props.year}</p>
      </section>
    </section>
  )
}