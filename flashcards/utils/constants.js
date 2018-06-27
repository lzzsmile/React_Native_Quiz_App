import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height

export const NOTIFICATION_KEY = 'NOTIFICATION_KEY'

export const DECK_STORAGE_KEY = 'DECK_STORAGE_KEY'
export const INITIAL_DECKS = [
  {
    title: 'ReactNative',
    questions: [
      {
        question: 'Is AsyncStorage a key-value based storage system?',
        answer: 'Yes. It is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app.'
      }
    ]
  },
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      },
      {
        question: 'Will the defination be hoisted in JavaScript?',
        answer: 'No. Before any JavaScript is executed, all function declarations are hoisted to the top of their current scope, not the defination.'
      },
      {
        question: 'Is Let different with Var in JavaScript?',
        answer: 'Yes. The difference is the scope. Var is scoped to the nearest function block, and Let is scoped to the nearest enclosing block.'
      }
    ]
  },
]
