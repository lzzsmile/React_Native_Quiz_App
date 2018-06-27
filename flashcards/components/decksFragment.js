import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, StyleSheet, Text, AsyncStorage, TouchableOpacity} from 'react-native'
import Deck from './deck'
import * as DeckActions from '../actions'
import {
  INITIAL_DECKS,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  DECK_STORAGE_KEY
} from '../utils/constants'
import {
  List,
  Fab,
  Button,
  Icon
} from 'native-base'
import {Actions} from 'react-native-router-flux'

class DecksFragment extends Component {

  constructor(props) {
    super(props)
    this.onDeckPressed = this.onDeckPressed.bind(this)
  }

  componentWillMount() {
    this.props.loadAllDecks()
  }

  onDeckPressed(deck) {
    Actions.detail({deck})
  }

  render() {
    const {decks} = this.props
    console.log("DecksFragment")
    console.log(decks)
    if (!decks) {
      return (
        <View style={styles.container}>
          <Text>No Deck</Text>
        </View>
      )
    } else {
      return (
          <View style={styles.container}>
            <List
              dataArray={decks}
              renderRow={(deck) =>
                <TouchableOpacity onPress={() => this.onDeckPressed(deck)}>
                  <Deck key={deck.title} name={deck.title} cards={deck.questions} />
                </TouchableOpacity>
              }
            />
          </View>
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonStyle: {
    marginLeft: SCREEN_WIDTH/2 - 60,
    marginRight: SCREEN_WIDTH/2 - 60,
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
})

const mapStateToProps = state => {
  const {decks} = state
  return {decks}
}

const mapDispatchToProps = {
  ...DeckActions
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksFragment)
