import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

const Info = ({ letter }) => {
  return (
    <div className='info'>
      <div className='text-right nav-links'>
        <Link to='/'>Home</Link>
      </div>
      <hr />
      <h3>Magic E</h3>
      <p>
        The silent e, usually Magic E when teaching kids, functions somewhat
        like accents in languages like Portuguese and French. In other words,
        it is used to indicate the sound of another letter.
      </p>
      <p>
        The Magic E usually works with one syllable words. Of course, there are
        exceptions, and those will be addressed as this app is further developed.
      </p>
      <h3>Data</h3>
      <p>
        The data used in this app are provided by
        the <a href='https://developer.oxforddictionaries.com'>
          Oxford Dictionaries API
        </a>.
      </p>
      <h3>Developer</h3>
      <p>
        My name is Geocarlos, and I started learning software development in
        2014. I have some experience with React, Express (Node framework),
        and Flask (Python framework), among others.
      </p>
      <p>
        <a href='https://geocarlos.github.io'>My GitHub Page</a>
      </p>
    </div>
  )
}

export default Info;
