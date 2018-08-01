import React, { Component } from 'react';
import Word from './Word';
import './Card.css';

class Card extends Component {

  state = {
    flipped: false
  }

  flip(){
    this.setState({flipped: !this.state.flipped})
  }

  render(){
    const { wordPair } = this.props;
    const { flipped } = this.state;
    return (
        wordPair.map((w, i) => (
          <div
            key={w+i}
            className={!flipped ? `${i%2===0?'card front':'cardback hidden'}` : `${i%2!==0?'card back':'cardback hidden'}`}
            >
              <Word
                flip={()=>{this.flip()}}
                word={w.word}
                ipa_spelling={w.ipa_spelling}
                audio={w.audio}
                ipa_spelling={w.ipa_spelling}/>
         </div>
        ))
    )
  }

}

export default Card;
