import React, { Component } from 'react';
import Speaker_Icon from './Speaker_Icon.svg';
import './Word.css';

class Word extends Component {

  componentDidMount(){
    if(this.props.autoplay){
      this._play(this.props.word)
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.autoplay && prevProps.word !== this.props.word){
      this._play(this.props.word)
    }
  }

  _play(inp){
    this.refs[inp].play();
  }

  checkAutoPlay(inp){
    if(this.props.autoplay){
      this._play(inp);
    }
  }

  render(){
    const { word, audio, flip, ipa_spelling } = this.props;

    return (
      <div className='col-md'>
        <h2 onClick={()=>{!!flip && flip();}} className={!!flip ? 'word-text' : ''}>{word}</h2>
        {ipa_spelling && <h5>[{ipa_spelling}]</h5>}
        <audio ref={word} src={audio}></audio>
        <button className='audio-btn' onClick={this._play.bind(this, word)}><img className='speaker-icon' src={Speaker_Icon} alt='audio icon' /></button><br />
      </div>
    )
  }

}

export default Word;
