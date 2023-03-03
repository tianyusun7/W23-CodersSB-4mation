import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Home screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
};