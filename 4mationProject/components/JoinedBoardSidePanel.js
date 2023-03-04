import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'left',
      padding: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      flex: 1,
      justifyingContent: 'left',
      alignItems: 'left',
    }
  });
  
const JoinedBoardSidePanel = () => {
    const whenPress = () => {
        console.log('Board joined in the past')
    };

    return (
        <View style={styles.button}>
            <Button title= "Board Joined" onPress = {whenPress}/>
        </View>
    );
};

export default JoinedBoardSidePanel;