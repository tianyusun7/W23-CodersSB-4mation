import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from './SearchBar.js';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
});


const TopBar = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <SearchBar/>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
    </View>
  );
};

export default TopBar;
