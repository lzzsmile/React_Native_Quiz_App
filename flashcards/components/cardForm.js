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
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants'
import { gray, white } from '../utils/colors'
import * as DeckActions from '../actions'
import {Actions} from 'react-native-router-flux'

class CardForm extends Component {

  state = {
    question: '',
    answer: ''
  }

  onQuestionTextChange(text) {
    this.setState({question: text})
  }

  onAnswerTextChange(text) {
    this.setState({answer: text})
  }

  onSubmitBtnPress() {
    const {question, answer} = this.state
    const {deckname} = this.props
    this.props.addCardToDeck(deckname, question, answer)
    Actions.pop()
    Actions.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Question"
            onChangeText={this.onQuestionTextChange.bind(this)}/>
        </View>
        <View style={styles.cardStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Answer"
            onChangeText={this.onAnswerTextChange.bind(this)}/>
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
  inputStyle: {
    fontSize: 18,
    height: 55,
  },
  buttonStyle: {
    marginLeft: SCREEN_WIDTH/2 - 90,
    marginRight: SCREEN_WIDTH/2 - 90,
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
})

const mapStateToProps = state => {
  const {decks, deck} = state
  return {decks, deck}
}

const mapDispatchToProps = {
  ...DeckActions
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm)
