import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Word extends Component {

  _play(inp){
    this.refs[inp].play();
  }

  render(){
    const { word, audio } = this.props;

    return (
      <div className='col-md'>
        <h2>{word}</h2>
        <audio ref={word} src={audio}></audio>
        <button className='btn btn-default' onClick={this._play.bind(this, word)}>Hear</button><br />
      </div>
    )
  }

}

export default Word;
