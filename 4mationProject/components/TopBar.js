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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  SearchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  JoinedBoardSidePanel: {
    flex: 1,
    justifyingContent: 'left',
    alignItems: 'left',
  }

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
