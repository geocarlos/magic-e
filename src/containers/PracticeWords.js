import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchWords} from '../actions';
import Word from '../components/Word';
import './PracticeWords.css';

class PracticeWords extends Component {

  state = {
    wordIndex: 0,
    currectAnswer: false,
    answered: false,
    started: false,
    score: 0,
    finished: false
  }

  componentDidMount(){
    if(!this.props.words[this.props.group]){
      this.props.dispatch(fetchWords(`/api/group/${this.props.group}`));
    }
  }

  move(){
    if(this.state.wordIndex < this.props.words[this.props.group].words.length - 1){
      this.setState({wordIndex: this.state.wordIndex + 1})
    } else {
      this.setState({started: false});
      this.setState({finished: true});
    }
    this.setState({answered: false})
  }

  startExercise(){
    this.setState({started: true})
  }

  needsMagicE(word){
    return word[word.length - 1] === 'e';
  }

  getUserAnswer(answer, word){
    console.log('running')
    if(answer === this.needsMagicE(word)){
      console.log('Correct')
      this.setState({score: this.state.score + 1})
    } else {
      console.log('Wrong')
    }
    this.setState({answered: true})
  }

  repeatExercise(){
    this.setState({
      wordIndex: 0,
      currectAnswer: false,
      answered: false,
      started: true,
      score: 0,
      finished: false
    })
  }

  render(){
    const { words, group } = this.props;
    const { wordIndex, answered, score } = this.state;

    return (
      <div className='learn-words text-center'>
        <div className='link-group'>
          <Link to='/'>Home</Link>
          <Link to={`/learn/${group}`}>Learn words with {group.toUpperCase()}</Link>
        </div>
        <div className='row' >
          {
            !words[group] ? <h3>No words in this group</h3> :
            <div className='practice-card'>
            {this.state.started && !this.state.finished ?
              <div>
                <h5>Your score: {score}</h5>
                <Word
                  word={answered ? words[group].words[wordIndex].word : '?'}
                  audio={words[group].words[wordIndex].audio}
                  autoplay={true}
                  ipa_spelling={words[group].words[wordIndex].ipa_spelling}/>
                  <div className='answer-area'>Needs magic E?</div>
                  {!answered ?
                  <div className='yes-no-btns'>
                    <button onClick={this.getUserAnswer.bind(this, true, words[group].words[wordIndex].word)}
                      className='btn btn-default needs-me'>Yes</button>
                    <button onClick={this.getUserAnswer.bind(this, false, words[group].words[wordIndex].word)}
                      className='btn btn-default'>No</button>
                  </div>
                  :
                  <div>
                    <button className='btn btn-primary' onClick={this.move.bind(this)}>Continue</button>
                  </div>}
              </div> :
               this.state.finished ?
                <div className='outro'>
                  {score > words[group].words.length - 3 ?
                    `Congratulations, you did well! ${score} points!` :
                    `You've scored only ${score} ${score === 1?'point':'points'}... but that's ok, keep practicing!`}
                <div>
                  <button className='btn btn-primary' onClick={this.repeatExercise.bind(this)}>Repeat</button>
                </div>
              </div>:
                <div className='intro'>
                Listen and decide whether the word you heard needs the <br/><strong>Magic</strong>
                <span className='me'> e</span>
                <div>
                  <button className='btn btn-primary' onClick={this.startExercise.bind(this)}>Start</button>
                </div>
              </div>}
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ words }){
  return {
    words
  }
}

export default connect(mapStateToProps)(PracticeWords);
