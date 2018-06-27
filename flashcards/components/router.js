import React from 'react'
import {Stack, Scene, Router, Actions} from 'react-native-router-flux'
import DecksFragment from './decksFragment'
import DeckForm from './deckForm'
import Detail from './detail'
import CardForm from './cardForm'
import Quiz from './quiz'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="main">
        <Scene
          key="decks"
          component={DecksFragment}
          navigationBarStyle={{backgroundColor: 'blue'}}
          title="Decks"
          titleStyle={{color: 'white'}}
          rightTitle={<FontAwesomeIcon name="plus-circle" style={{fontSize: 35, color: 'white'}}/>}
          onRight={() => Actions.addDeck()}
          initial/>
        <Scene
          key="addDeck"
          component={DeckForm}
          navigationBarStyle={{backgroundColor: 'blue'}}
          navBarButtonColor="white"
          title="Add Deck"
          titleStyle={{color: 'white'}}/>
        <Scene
          key="detail"
          component={Detail}
          navigationBarStyle={{backgroundColor: 'blue'}}
          title="Deck Detail"
          titleStyle={{color: 'white'}}
          navBarButtonColor="white"/>
        <Scene
          key="addCard"
          component={CardForm}
          navigationBarStyle={{backgroundColor: 'blue'}}
          title="Add Card"
          titleStyle={{color: 'white'}}
          navBarButtonColor="white"/>
        <Scene
          key="quiz"
          component={Quiz}
          navigationBarStyle={{backgroundColor: 'blue'}}
          title="Quiz"
          titleStyle={{color: 'white'}}
          navBarButtonColor="white"/>
      </Stack>
    </Router>
  )
}

export default RouterComponent
