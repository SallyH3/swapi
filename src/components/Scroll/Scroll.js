import React from 'react';
import PropTypes from 'prop-types';

export default function Scroll ({ crawl, title, year }) {
  return (
    <section className='scroll-container'>
      <section className='crawl-before'>
        <p className='text crawl'>{ crawl }</p>
        <h3 className='scroll-title'>{ title }</h3>
        <p className='text year'>{ year }</p>
      </section>
    </section>
  )
}
Scroll.propTypes = {
  crawl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string

}