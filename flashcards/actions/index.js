import {
  DECK_STORAGE_KEY,
  INITIAL_DECKS
} from '../utils/constants'
import {
  AsyncStorage
} from 'react-native'

export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS'
export const LOAD_DECK = 'LOAD_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK"

export const loadAllDecks = () => {
  return (dispatch) => {
    AsyncStorage.clear()
    AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then(decks => {
        if (decks === null) {
          AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(INITIAL_DECKS))
          dispatch({type: LOAD_ALL_DECKS, payload: INITIAL_DECKS})
        } else {
          dispatch({type: LOAD_ALL_DECKS, payload: JSON.parse(decks)})
        }
      })
  }
}

export const addDeck = (newtitle) => {
  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then(decks => {
        const newDecks = JSON.parse(decks)
        newDecks.push({title: newtitle, questions: []})
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newDecks))
        dispatch({type: ADD_DECK, payload: {title: newtitle, questions: []}})
      })
      .catch(error => console.log(error))
  }
}

export const addCardToDeck = (title, newquestion, newanswer) => {
  return (dispatch) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then(decks => {
        const newDecks = JSON.parse(decks)
        const deck = newDecks.filter(deck => deck.title === title)
        const newdeck = deck[0]
        newdeck.questions.push({question: newquestion, answer: newanswer})
        const updatedDecks = newDecks.map(d => d.title === newdeck.title ? newdeck : d)
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(updatedDecks))
        dispatch({type: ADD_CARD_TO_DECK, payload: newdeck})
      })
  }
}
