import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchWords} from '../actions';
import Card from '../components/Card';
import './LearnWords.css';

class LearnWords extends Component {

  componentDidMount(){
    if(!this.props.words[this.props.group]){
      this.props.dispatch(fetchWords(`/api/group/${this.props.group}`))
    }
  }

  render(){

    const { words, group } = this.props;

    const pairs = [];

    if(words[group]){
      for(let i = 0; i < words[group].words.length; i += 2){
        pairs.push([words[group].words[i], words[group].words[i+1]]);
      }
    }

    console.log(pairs)

    return (
      <div className='learn-words text-center'>
      <div className='row' >
        {!words[group] ? <div className='no-words'>
          No words in this group...</div> :
          pairs.map((wp, i) => (
            <Card key={wp[0]+i} wordPair={wp} />
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

export default connect(mapStateToProps)(LearnWords);
