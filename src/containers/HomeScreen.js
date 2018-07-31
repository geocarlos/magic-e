import React, {Component} from 'react';
import './HomeScreen.css'
import BaseLetter from '../components/BaseLetter';
import { connect } from 'react-redux';

class HomeScreen extends Component {

  render(){
    return (
      <div className='homescreen'>
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
