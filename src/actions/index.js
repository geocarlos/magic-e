import { GET_WORDS, GET_WORD, ADD_WORD, SHUFFLE_WORDS } from './types';

export const getWord = (word) => ({
  type: GET_WORD, payload: word
})

export const getWords = (words) => ({
  type: GET_WORDS, payload: words
})

export const addWord = (word) => ({
  type: ADD_WORD, payload: word
})

export const shuffleWords = (words) => ({
  type: SHUFFLE_WORDS, payload: words
})

/* Thunk Functions */

export const fetchWord = (url) => (dispatch) => {
  fetch(url)
  .then((res)=> res.json())
  .then((data)=> dispatch(getWord(data.results[0])))
  .catch(()=> console.log("Unable to fetch word"));
}

export const fetchWords = (url) => (dispatch) => {
  fetch(url)
  .then((res)=> res.json())
  .then((data)=> dispatch(getWords(data)))
  .catch(()=> console.log("Unable to fetch word group"));
}

export const addNewWord = (group, url) => (dispatch) => {
  fetch(url)
  .then((res)=> res.json())
  .then((data)=> dispatch(addWord({group: group, word: data})))
  .catch(()=> console.log("Unable to add word"));
}
