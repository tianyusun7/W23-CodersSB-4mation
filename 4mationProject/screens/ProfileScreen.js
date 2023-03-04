import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
    <Text>This is the profile screen</Text>
    </View>
  );
};

export default ProfileScreen;