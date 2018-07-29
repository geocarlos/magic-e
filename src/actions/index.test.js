import { GET_WORDS, GET_WORD } from './types';
import { getWords, getWord } from './index';

describe('Test actions', ()=>{

  it('should return action with an empty array', ()=>{
    expect(getWords('hat')).toEqual({type: GET_WORDS, payload: 'hat'});
  });

  it('should return action with an empty array', ()=>{
    expect(getWords([])).toEqual({type: GET_WORDS, payload: []});
  });
});
