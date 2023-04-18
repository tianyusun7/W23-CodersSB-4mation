import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// used in every screen where a data fetch from the backend is needed
// follow the example in HomeScreen

const Loading = () => {
  return (
    <View>
      <Text style={{fontSize: 32}}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})