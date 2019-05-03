import React from 'react';

export default function Scroll ({ crawl, title, year }) {
  return (
    <section className='scroll-container'>
      <section className='crawl'>
        <p className='text crawl'>{ crawl }</p>
        <h3 className='scroll-title'>{ title }</h3>
        <p className='text year'>{ year }</p>
      </section>
    </section>
  )
}