import { GET_WORDS } from './types';

export const getWords = (words) => ({
  type: GET_WORDS, payload: words
})
