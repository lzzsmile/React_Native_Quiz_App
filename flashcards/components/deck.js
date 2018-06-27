import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { gray, white, blue } from '../utils/colors';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants'

export default function Deck ({ name, cards }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <Text style={styles.count}>
        {`${cards.length} cards`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT / 3 - 20,
    backgroundColor: white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: gray,
    marginTop: 10,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowColor: blue,
    shadowOffset: {
      width: 0,
      height: 2
    },
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 48,
  },
  count: {
    fontSize: 30,
    color: gray,
  }
})
