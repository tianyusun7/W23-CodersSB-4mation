import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VoteBar from './VoteBar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
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
      <VoteBar numUpvotes={props.numUpvotes} numDownvotes={props.numDownvotes} numComments={props.numComments}/>
    </View>
  );
};

export default PostListItem;