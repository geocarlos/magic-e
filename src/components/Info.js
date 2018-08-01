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
        it used to indicate the sound of another letter.
      </p>
      <p>
        The Magic E usually works with one syllable words. Of course, there are
        exceptions, and those will be addressed as this app is further developed.
      </p>
      <h3>Data</h3>
      <p>
        The data used in this app are provided by the Oxford Dictionaries API.
      </p>
    </div>
  )
}

export default Info;
