import React from 'react';
import { FlatList } from 'react-native';
import BoardListItem from './BoardListItem.js';

const ComponentList = ({ navigation }) => {
  const data = [
    { id: 0, name: 'anime', owner: 'sdf4' },
    { id: 1, name: 'programming', owner: 'asdasd' },
    { id: 2, name: 'tv shows', owner: 'abc' },
    { id: 3, name: 'music', owner: 'yhhhh6677' },
    { id: 4, name: 'video games', owner: 'uluyffhhf6' },
  ];

  const renderItem = ({ item }) => (
    <BoardListItem id={item.id} navigation={navigation} boardName={item.name} boardOwnerName={item.owner}/>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ComponentList;