import {combineReducers} from 'redux';
import {GET_WORD, GET_WORDS, ADD_WORD, SHUFFLE_WORDS} from '../actions/types';

export const word = (state = {}, action) => {
  switch (action.type) {
    case GET_WORD:
      return action.payload;
    default:
      return state;
  }
}

export const words = (state = {}, action) => {
  const newState = state;
  switch (action.type) {
    case GET_WORDS:
      return {...state, ...action.payload};
    case ADD_WORD:
      if(newState[action.payload.group]){
        newState[action.payload.group].words.push(action.payload.word);
      } else {
        newState[action.payload.group].words = action.payload;
      }
      return newState;
    default:
      return state;
  }
}

export const shuffledWords = (state = [], action) => {
  switch (action.type) {
    case SHUFFLE_WORDS:
      const arr = Object.assign([], action.payload)
      return arr.sort(()=>0.5 - Math.random());
    default:
      return state;
  }
}

export default combineReducers({ word, words, shuffledWords });
