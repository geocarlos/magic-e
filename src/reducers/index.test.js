import {GET_WORDS, GET_WORD, ADD_WORD} from '../actions/types';
import {words, word, addWord} from './index';

describe('test reducers', ()=>{

  it('should return an object', ()=>{
    expect(word(undefined, {type: GET_WORD, payload: ''})).toEqual('');
  })

  it('should return an object', ()=>{
    expect(word(undefined, {type: GET_WORD, payload: 'hat'})).toEqual('hat');
  })

  it('should return an empty object', ()=>{
    expect(words(undefined, {type: GET_WORDS, payload: {}})).toEqual({});
  })

  it('should return a the given group with the new word', ()=>{
    expect(words({'a':{words: ['hat']}}, {type: ADD_WORD, payload: {group: 'a', word: 'hate'}})).toEqual({'a':{words: ['hat', 'hate']}});
  })
})
