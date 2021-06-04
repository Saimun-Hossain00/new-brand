import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function TopBar() {

  return (
    <View style={styles.container}>
      <FontAwesome5 name="bookmark" size={27} color="#ffc947" />
      <FontAwesome name="cart-plus" size={27} color="#185adb" />
      <FontAwesome name="user" size={27} color="#231e23" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
})