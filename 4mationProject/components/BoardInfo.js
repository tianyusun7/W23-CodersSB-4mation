import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
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
      <Text style={styles.text}>{props.boardOwnerName}</Text>
      <Text style={styles.text}>{props.creationDate}</Text>
      <Text style={styles.text}>{props.numberOfMembers}</Text>
      <Text style={styles.text}>{props.boardDescription}</Text>
    </View>
    );
};

export default BoardInfo;

