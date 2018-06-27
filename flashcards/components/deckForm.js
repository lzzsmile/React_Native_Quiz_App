import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native'
import {
  Button,
} from 'native-base'
import { SCREEN_WIDTH, SCREEN_HEIGHT, DECK_STORAGE_KEY } from '../utils/constants'
import { gray, white, lightGreen, black } from '../utils/colors';
import * as DeckActions from '../actions'
import {Actions} from 'react-native-router-flux'

class DeckForm extends Component {

  state = {
    title: ''
  }

  onTextChange(text) {
    this.setState({title: text})
  }

  onSubmitBtnPress() {
    const {title} = this.state
    this.props.addDeck(title)
    const deck = {title: title, questions: []}
    Actions.pop()
    Actions.detail({deck})
  }

  render() {
    const {deck, decks} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.labelStyle}>
          What is the title of your new deck?
        </Text>
        <View style={styles.cardStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Deck Title"
            onChangeText={this.onTextChange.bind(this)}/>
        </View>
        <Button dark rounded block medium
          style={styles.buttonStyle}
          onPress={this.onSubmitBtnPress.bind(this)}>
          <Text style={{color: white}}>Submit</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    height: 55,
  },
  cardStyle: {
    height: 55,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: gray,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
  },
  labelStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    textAlign: 'center'
  },
  buttonStyle: {
    marginLeft: SCREEN_WIDTH/2 - 60,
    marginRight: SCREEN_WIDTH/2 - 60,
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT / 2,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: gray,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => {
  const {deck, decks} = state
  return {deck, decks}
}

const mapDispatchToProps = {
  ...DeckActions
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm)
