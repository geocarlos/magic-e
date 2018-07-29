import React, {Component} from 'react';
import { connect } from 'react-redux';

class LearnWords extends Component {
  render(){
    return (
      <div className='learn-words'>
        <h2>Learn Words</h2>
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
