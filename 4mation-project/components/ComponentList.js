import React from 'react';
import { FlatList, Text } from 'react-native';
import { BoardListItem } from './BoardListItem.js';

const ComponentList = () => {
  const data = [
    { id: 1, name: 'boardName1', owner: 'owner1' },
    { id: 2, name: 'boardName2', owner: 'owner2' },
    { id: 3, name: 'boardName3', owner: 'owner3' },
    { id: 4, name: 'boardName4', owner: 'owner4' },
    { id: 5, name: 'boardName5', owner: 'owner5' },
  ];

  const renderItem = ({ item }) => (
    <BoardListItem boardName={item.name} boardOwnerName={item.owner} />
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