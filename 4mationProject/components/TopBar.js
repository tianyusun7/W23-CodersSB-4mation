import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
});

const TopBar = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

export default TopBar;
