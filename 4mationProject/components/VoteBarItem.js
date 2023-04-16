import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomButton from './CustomButton';

const VoteBarItem = (props) => {
  return (
    <View style={styles.container}>
        <CustomButton
            title={props.type}
            onPress={() => {}}
            buttonStyle={{
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 1,
                height: 30,
            }}
            textStyle={{
                color: 'black',
            }}
        />
        <Text style={styles.text}> {props.num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default VoteBarItem;