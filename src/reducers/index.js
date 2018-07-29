import {combineReducers} from 'redux';
import {GET_WORD, GET_WORDS, ADD_WORD} from '../actions/types';

export const word = (state = {}, action) => {
  switch (action.type) {
    case GET_WORD:
      return action.payload;
    default:
      return state;
  }
}

export const words = (state = {}, action) => {
  switch (action.type) {
    case GET_WORDS:
      return action.payload;
    case ADD_WORD:
      const newState = state;
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

export default combineReducers({ word, words });
