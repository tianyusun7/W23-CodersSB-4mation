import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const BoardListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.boardName}</Text>
      <Text>-</Text>
      <Text>{props.boardOwnerName}</Text>
    </View>
  );
};

export default BoardListItem;