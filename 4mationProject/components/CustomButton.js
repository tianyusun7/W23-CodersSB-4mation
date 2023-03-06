import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      alignItems: 'center',
    },
  });

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;