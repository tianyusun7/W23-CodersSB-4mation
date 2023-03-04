import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      padding: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

const BoardInfo = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.boardName}</Text>
        <Text style={styles.text}>owner: {props.boardOwnerName}</Text>
        <Text style={styles.text}>date created: {props.creationDate}</Text>
        <Text style={styles.text}>Number of members: {props.numberOfMembers}</Text>
        <Text style={styles.text}>Description: {props.boardDescription}</Text>
      </View>
    );
};

export default BoardInfo;

