import {combineReducers} from 'redux';
import {GET_WORD} from '../actions/types';
import {GET_WORDS} from '../actions/types';

export const word = (state = {}, action) => {
  switch (action.type) {
    case GET_WORD:
      return action.payload
      break;
    default:
      return state;
  }
}

export const words = (state = [], action) => {
  switch (action.type) {
    case GET_WORDS:
      return [...state, ...action.payload]
      break;
    default:
      return state;
  }
}

export default combineReducers({ word, words });
