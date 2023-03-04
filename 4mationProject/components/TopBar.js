import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar.js';
import JoinedBoardSidePanel from './JoinedBoardSidePanel.js';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
});


const TopBar = () => {
  return (
    <View style={styles.container} >
      <SearchBar/>
      <JoinedBoardSidePanel/>
    </View>
  );
};

export default TopBar;
