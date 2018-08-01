import React, {Component} from 'react';
import './HomeScreen.css'
import BaseLetter from '../components/BaseLetter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomeScreen extends Component {

  render(){
    return (
      <div className='homescreen'>
        <div className='text-right nav-links'>
          <Link to='/app-info'>Info</Link>
        </div>
        <hr />
        {['A', 'I', 'O', 'U'].map((letter)=>(
          <div key={letter}>
            <BaseLetter
              letter={letter}/>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ words }){
  return {
    words
  }
}

export default connect(mapStateToProps)(HomeScreen);
