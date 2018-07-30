import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchWord} from '../actions';
import Word from '../components/Word';

class PracticeWords extends Component {

  componentDidMount(){
    // this.props.dispatch(fetchWord('/api/word/hate'));
  }

  _play(inp){
    this.refs[inp].play();
  }

  render(){
    console.log(this.props.words)
    const { words, group } = this.props;
    return (
      <div className='learn-words text-center'>
        <div className='row' >
          {
            !words[group] ? <h3>No words in this group</h3> :
            words[group]['words'].map((w, i) => (
              <div key={`${i}${w}`}>
                <Word
                  word={w.word}
                  audio={w.audio}
                  ipa_spelling={w.ipa_spelling}/>
              </div>
            ))
          }
        </div>
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

export default connect(mapStateToProps)(PracticeWords);
