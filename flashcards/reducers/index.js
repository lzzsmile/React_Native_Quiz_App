import {
  LOAD_ALL_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK,
} from '../actions'

const INITIAL_STATE = {
  decks: [],
  deck: {},
}

export default function decks(state = INITIAL_STATE, action) {
  const {payload} = action
  switch(action.type) {
    case LOAD_ALL_DECKS:
      return {
        ...state,
        decks: payload
      }
    case ADD_DECK:
      return {
        ...state,
        decks: [
          ...state.decks,
          payload
        ],
        deck: payload
      }
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        decks: state.decks.map(deck => deck.title === payload.title ? payload : deck),
        deck: payload
      }
    default:
      return state
  }
}
