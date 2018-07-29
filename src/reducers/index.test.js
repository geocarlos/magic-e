import {GET_WORDS} from '../actions/types';
import {words} from './index';

describe('test reducers', ()=>{
  it('should return an empty array', ()=>{
    expect(words(undefined, {type: GET_WORDS, payload: []})).toEqual([]);
  })
})
