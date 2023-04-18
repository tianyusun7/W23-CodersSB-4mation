import React from 'react';
import { FlatList } from 'react-native';
import BoardListItem from './BoardListItem.js';
import PostListItem from './PostListItem.js';

const ComponentList = ({ navigation, data }) => {
  const renderItem = ({ item }) => {
    // choose what component to render based on item.type
    // see TestData.js to check item.type
    /*
    TODO: id should be assigned with document ids from firebase, so later down the data flow we can use the document id to fetch the corresponding document.
    for example an id of a board document will be passed down. Pass the document id to a data fetch function defined in firebase.js to get the data for the frontend.
    */
    if (item.type === 0) {
      return <BoardListItem id={item.id} navigation={navigation} boardName={item.boardName} boardOwnerName={item.boardOwnerName}/>
    } else if (item.type === 1) {
      return <PostListItem id={item.id} navigation={navigation} postAuthor={item.postAuthor} postTime={item.postTime} postTitle={item.postTitle} numUpvotes={item.numUpvotes} numDownvotes={item.numDownvotes} numComments={item.numComments}/>
    } else if (item.type === 2) {
      // CommentListItem
      // add more types as needed
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