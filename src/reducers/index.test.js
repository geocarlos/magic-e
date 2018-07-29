import {GET_WORDS, GET_WORD} from '../actions/types';
import {words, word} from './index';

describe('test reducers', ()=>{

  it('should return an object', ()=>{
    expect(word(undefined, {type: GET_WORD, payload: ''})).toEqual('');
  })

  it('should return an object', ()=>{
    expect(word(undefined, {type: GET_WORD, payload: 'hat'})).toEqual('hat');
  })

  it('should return an empty array', ()=>{
    expect(words(undefined, {type: GET_WORDS, payload: []})).toEqual([]);
  })
})
