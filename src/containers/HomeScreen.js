import React, {Component} from 'react';
import './HomeScreen.css'
import BaseLetter from '../components/BaseLetter';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  render(){
    console.log(this.props)
    return (
      <div className='homescreen'>
        {['A', 'E', 'I', 'O', 'U'].map((letter)=>(
          <div>
            <BaseLetter
              key={letter}
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
