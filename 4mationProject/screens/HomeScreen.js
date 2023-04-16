import React from 'react';
import { View, StyleSheet } from 'react-native';
import ComponentList from '../components/ComponentList.js';
import TopBar from '../components/TopBar.js';
import { boardListData } from '../TestData.js'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} defaultText="search a board"/>
      <ComponentList navigation={navigation} data={boardListData}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;