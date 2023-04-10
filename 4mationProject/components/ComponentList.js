import React from 'react';
import { FlatList } from 'react-native';
import BoardListItem from './BoardListItem.js';
import PostListItem from './PostListItem.js';

const ComponentList = ({ navigation, data }) => {
  const renderItem = ({ item }) => {
    // choose what component to render based on item.type
    // see TestData.js to check item.type
    if (item.type === 0) {
      return <BoardListItem id={item.id} navigation={navigation} boardName={item.boardName} boardOwnerName={item.boardOwnerName}/>
    } else if (item.type === 1) {
      return <PostListItem id={item.id} navigation={navigation} postAuthor={item.postAuthor} postTime={item.postTime} postTitle={item.postTitle} numUpvotes={item.numUpvotes} numDownvotes={item.numDownvotes} numComments={item.numComments}/>
    } else if (item.type === 2) {
      // different type of component
    } 
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ComponentList;