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

const VoteBar = (props) => {
  return (
    <View style={styles.container}>
      <Text>VoteBar</Text>
    </View>
  );
};

export default VoteBar;