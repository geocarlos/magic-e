import {combineReducers} from 'redux';
import {GET_WORDS} from '../actions/types';

export const words = (state = [], action) => {
  switch (action.type) {
    case GET_WORDS:
      return [...state, ...action.payload]
      break;
    default:

  }
}

export default combineReducers({ words });
