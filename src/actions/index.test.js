import { GET_WORDS } from './types';
import { getWords } from './index';

describe('Test actions', ()=>{
  it('should return action with an empty array', ()=>{
    expect(getWords([])).toEqual({type: GET_WORDS, payload: []});
  })
})
