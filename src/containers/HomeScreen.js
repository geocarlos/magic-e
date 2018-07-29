import React, {Component} from 'react';
import BaseLetter from '../components/BaseLetter';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  render(){
    console.log(this.props)
    return (
      <div className='homescreen'>
        {['A', 'E', 'I', 'O', 'U'].map((letter)=>(
          <BaseLetter
            key={letter}
            letter={letter}/>
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
