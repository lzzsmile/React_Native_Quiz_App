import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import {
  Button,
} from 'native-base'
import {Actions} from 'react-native-router-flux'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'
import { gray, white, black } from '../utils/colors'
import * as DeckActions from '../actions'

class Detail extends Component {

  onCardBtnPressed() {
    const {deck} = this.props
    const deckname = deck.title
    Actions.addCard({deckname})
  }

  onQuizBtnPressed() {
    const {deck} = this.props
    clearLocalNotification().then(setLocalNotification)
    Actions.quiz({deck})
  }

  render() {
    const {deck} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{deck.title}</Text>
        <Text style={styles.countStyle}>{`${deck.questions.length} cards`}</Text>
        <Button light block
          style={styles.buttonStyle1}
          onPress={this.onCardBtnPressed.bind(this)}>
          <Text style={{color: black, fontSize: 18}}>Add Card</Text>
        </Button>
        <Button dark block
          style={styles.buttonStyle2}
          onPress={this.onQuizBtnPressed.bind(this)}>
          <Text style={{color: white, fontSize: 18}}>Start Quiz</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle1: {
    marginLeft: SCREEN_WIDTH/2 - 130,
    marginRight: SCREEN_WIDTH/2 - 130,
    marginTop: 150,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonStyle2: {
    marginLeft: SCREEN_WIDTH/2 - 130,
    marginRight: SCREEN_WIDTH/2 - 130,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleStyle: {
    fontSize: 48,
  },
  countStyle: {
    fontSize: 30,
    color: gray,
  }
})

export default Detail
