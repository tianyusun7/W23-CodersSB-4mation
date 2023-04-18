import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar.js';
import CustomButton from './CustomButton';
// displayed in almost every screen

const TopBar = ({ navigation, defaultText }) => {
  return (
    <View style={styles.container} >
      <SearchBar defaultText={defaultText}/>
      <CustomButton
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
          height: 36,
        }}
        textStyle={{
          color: 'black',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
});


export default TopBar;
