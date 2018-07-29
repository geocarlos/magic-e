import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LearnWords extends Component {
  render(){
    return (
      <div className='learn-words text-center'>
        <h2>Learn Words</h2>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

function mapStateToProps({ words }){
  return {
    words
  }
}

export default connect(mapStateToProps)(LearnWords);
