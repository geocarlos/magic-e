import { GET_WORDS, GET_WORD } from './types';

export const getWord = (word) => ({
  type: GET_WORD, payload: word
})

export const getWords = (words) => ({
  type: GET_WORDS, payload: words
})

/* Thunk Functions */

export const fetchWord = (url) => (dispatch) => {
  fetch(url)
  .then((res)=> res.json())
  .then((data)=> dispatch(getWord(data.results[0])))
  .catch(()=> console.log("Unable to fetch word"));
}
