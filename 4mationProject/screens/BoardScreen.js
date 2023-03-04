import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar.js';
import BoardInfo from '../components/BoardInfo';
import { boardInfoData } from '../TestData.js'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});



const BoardScreen = (props) => {
  const { id, navigation } = props.route.params;
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} defaultText="search a post"/>
      <BoardInfo {...boardInfoData[id]} />
    </View>
  );
};

export default BoardScreen;