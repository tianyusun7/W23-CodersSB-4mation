import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ComponentList from '../components/ComponentList.js';
import TopBar from '../components/TopBar.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar/>
      <ComponentList/>
    </View>
  );
};

export default HomeScreen;