import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar.js';
import BoardInfo from '../components/BoardInfo';
import { boardInfoData } from '../TestData.js'
import { PostListData } from '../TestData.js'
import ComponentList from '../components/ComponentList.js';


const BoardScreen = (props) => {
  const { id, navigation } = props.route.params;
  /*
  TODO: replace boardInfoData and PostListData with data from the actual backend
  follow the example in HomeScreen to learn how to display a loading text while fetching data
  */
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} defaultText="search a post"/>
      <BoardInfo {...boardInfoData[id]} />
      <ComponentList navigation={navigation} data={PostListData}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BoardScreen;