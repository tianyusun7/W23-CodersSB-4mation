import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from './SearchBar.js';
import CustomButton from './CustomButton';

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
      <CustomButton
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
        }}
        textStyle={{
          color: 'black',
        }}
      />
    </View>
  );
};

export default TopBar;
