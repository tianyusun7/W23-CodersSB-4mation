import React from 'react';
import { View, StyleSheet } from 'react-native';
import BoardInfo from '../components/BoardInfo';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});



const BoardScreen = ({id}) => {
  const data = [
    {boardName: 'boardName1', boardOwnerName: 'owner', creationDate: '03/03/2023', numberOfMembers: 12, boardDescription: 'abc'},
    {boardName: 'boardName2', boardOwnerName: 'owner', creationDate: '03/03/2023', numberOfMembers: 12, boardDescription: 'abc'},
    {boardName: 'boardName3', boardOwnerName: 'owner', creationDate: '03/03/2023', numberOfMembers: 12, boardDescription: 'abc'},
    {boardName: 'boardName4', boardOwnerName: 'owner', creationDate: '03/03/2023', numberOfMembers: 12, boardDescription: 'abc'},
    {boardName: 'boardName5', boardOwnerName: 'owner', creationDate: '03/03/2023', numberOfMembers: 12, boardDescription: 'abc'},
  ]

  return (
    <View style={styles.container}>
      <BoardInfo boardData={data[1]} />
    </View>
  );
};

export default BoardScreen;