import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchWord} from '../actions';

class AddWord extends Component {

  _handleSubmit(e){
    e.preventDefault();
    console.log(this.refs);
  }

  render(){
    return (
      <div className='learn-words text-center'>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div>
            <label>Group:&nbsp;</label>
            <input ref='group' type='text' />
          </div>
          <div>
            <label>Word:&nbsp;</label>
            <input ref='word' type='text' />
          </div>
          <input type='submit' value='Submit' />
        </form>
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

export default connect(mapStateToProps)(AddWord);
