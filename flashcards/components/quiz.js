import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  Button,
} from 'native-base'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants'
import { red, white, black } from '../utils/colors'
import {Actions} from 'react-native-router-flux'

class Quiz extends Component {

  state = {
    currentQuestion: 0,
    currentAnswer: 0,
    showAnswer: false,
  }

  backBtnPressed() {
    Actions.pop()
  }

  render() {
    const {deck} = this.props
    const questions = deck.questions
    const {currentQuestion, currentAnswer, showAnswer} = this.state
    if (questions.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.finishtext}>No questions for this deck!</Text>
        </View>
      )
    }
    if (currentQuestion < questions.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.indicatortext}>{`${currentQuestion+1} of ${questions.length}`}</Text>
          <Text style={styles.quiztitle}>{showAnswer? questions[currentQuestion].answer : questions[currentQuestion].question}</Text>
          <TouchableOpacity onPress={() => this.setState({showAnswer: !showAnswer})}>
            <Text style={styles.questiontext}>{showAnswer ? "Question" : "Answer"}</Text>
          </TouchableOpacity>
          <Button success block
            style={styles.buttonStyle1}
            onPress={() => {
              this.setState({currentQuestion: currentQuestion+1, currentAnswer: currentAnswer+1})
            }}>
            <Text style={{color: white, fontSize: 18}}>Correct</Text>
          </Button>
          <Button danger block
            style={styles.buttonStyle2}
            onPress={() => this.setState({currentQuestion: currentQuestion+1})}>
            <Text style={{color: white, fontSize: 18}}>Incorrect</Text>
          </Button>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.finishtext}>You got {currentAnswer} of {questions.length}</Text>
        <Button success block
          style={styles.buttonStyle1}
          onPress={() => {
            this.setState({currentQuestion: 0, currentAnswer: 0})
          }}>
          <Text style={{color: white, fontSize: 18}}>Restart Quiz</Text>
        </Button>
        <Button danger block
          style={styles.buttonStyle2}
          onPress={this.backBtnPressed.bind(this)}>
          <Text style={{color: white, fontSize: 18}}>Back to deck</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  quiztitle: {
    marginTop: 45,
    fontSize: 30,
    textAlign: 'center',
  },
  questiontext: {
    textAlign: 'center',
    marginBottom:35,
    marginTop: 35,
    fontSize: 18,
    color: red,
  },
  indicatortext: {
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 8,
    fontSize: 18,
  },
  buttonStyle1: {
    marginLeft: SCREEN_WIDTH/2 - 130,
    marginRight: SCREEN_WIDTH/2 - 130,
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
  finishtext: {
    textAlign: 'center',
    marginTop: 20,
    marginLeft: SCREEN_WIDTH/2 - 130,
    marginRight: SCREEN_WIDTH/2 - 130,
    fontSize: 30,
    marginBottom: 35
  }
})

export default Quiz
