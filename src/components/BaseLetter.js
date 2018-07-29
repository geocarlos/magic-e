import React from 'react';
import { Link } from 'react-router-dom';

const BaseLetter = ({ letter }) => {
  return (
    <div className='row'>
      <div className='col-md text-center'><h2>- {letter} -</h2></div>
      <div className='col-md'><Link to={`/learn/${letter}`}>Learn the magic on {letter}</Link></div>
      <div className='col-md'><Link to={`/practice/${letter}`}>Practice the magic on {letter}</Link></div>
    </div>
  )
}

export default BaseLetter;
