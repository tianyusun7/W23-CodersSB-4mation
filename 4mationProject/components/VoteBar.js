import React from 'react';
import { View, StyleSheet } from 'react-native';
import VoteBarItem from './VoteBarItem';

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
      <VoteBarItem type='upvote' num={props.numUpvotes}/>
      <VoteBarItem type='downvote' num={props.numDownvotes}/>
      <VoteBarItem type='comment' num={props.numComments}/>
    </View>
  );
};

export default VoteBar;