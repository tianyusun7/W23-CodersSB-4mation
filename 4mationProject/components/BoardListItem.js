import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 10,
    flex: 1, 
  }, 
  linkContainer: {
    flex: 1,
    alignItems: 'center', // add this line to center the child items vertically
    justifyContent: 'center', // add this line to center the child items horizontally
  },
  link: {
    color: 'green',
    textDecorationLine: 'underline',
  },
});

const BoardListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={ styles.linkContainer }>
        <Text
          style={styles.link}
          onPress={() => props.navigation.navigate('Board', { id: props.id })}
        >
          {`${props.boardName} - ${props.boardOwnerName}`}
        </Text>
      </View>
    </View>
  );
};

export default BoardListItem;