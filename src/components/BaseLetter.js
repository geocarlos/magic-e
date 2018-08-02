import React from 'react';
import { Link } from 'react-router-dom';
import './BaseLetter.css'

const BaseLetter = ({ letter }) => {
  return (
    <div className='row letter'>
      <div className='col-md text-center'><h2>- {letter} -</h2></div>
      <div className='col-md link'><Link to={`/learn/${letter.toLowerCase()}`}>Learn the magic on {letter}</Link></div>
      <div className='col-md link'><Link to={`/practice/${letter.toLowerCase()}`}>Practice the magic on {letter}</Link></div>
    </div>
  )
}

export default BaseLetter;
