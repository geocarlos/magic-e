import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchWord} from '../actions';

class LearnWords extends Component {

  componentDidMount(){
    this.props.dispatch(fetchWord('/api/hat'));
  }

  _play(inp){
    this.refs[inp].play();
  }

  render(){
    console.log(this.props.word)
    return (
      <div className='learn-words text-center'>
        <h2>{this.props.word.word}</h2>
        {this.props.word.lexicalEntries && <audio ref='hat' src={this.props.word.lexicalEntries[0].pronunciations[0].audioFile}></audio>}
        <button onClick={this._play.bind(this, 'hat')}>Hear</button><br />
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

function mapStateToProps({ word }){
  return {
    word
  }
}

export default connect(mapStateToProps)(LearnWords);
