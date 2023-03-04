import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VoteBar from './VoteBar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const PostListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text>posted by: {props.postAuthor} at {props.postTime}</Text>
      <Text style={styles.text}>{props.postTitle}</Text>
      <VoteBar/>
    </View>
  );
};

export default PostListItem;