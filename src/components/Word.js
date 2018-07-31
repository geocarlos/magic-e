import React, { Component } from 'react';
import Speaker_Icon from './Speaker_Icon.svg';
import './Word.css';
import logo from '../logo.png'

class Word extends Component {

  _play(inp){
    this.refs[inp].play();
  }

  render(){
    const { word, audio, flip } = this.props;

    return (
      <div className='col-md'>
        <h2 onClick={()=>{!!flip ? flip() : '';}} className={!!flip ? 'word-text':''}>{word}</h2>
        <audio ref={word} src={audio}></audio>
        <button className='audio-btn' onClick={this._play.bind(this, word)}><img className='speaker-icon' src={Speaker_Icon} /></button><br />
      </div>
    )
  }

}

export default Word;
