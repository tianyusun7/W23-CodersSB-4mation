import React from 'react';
import { View, StyleSheet, Text, Button, TextInput, Alert } from 'react-native';

// would need to load the current signed in user and fetch that user's information
// the profile screen should not be reached if there is no currently signed in user

const ProfileScreen = ({navigation}) => {
  const [name, onChangeName] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {styles.title}> {name}'s Profile Screen</Text>
      <Text>Customize your name Here</Text>
      <TextInput 
        style = {styles.input}
        onChangeText = {name => onChangeName(name)}
      /> 
      <Button
        title="Joined Boards"
        color="#f194ff"
        onPress={() => Alert.alert('Navigating to JoinedBoardsScreen')}
      />
      <Button
        title="My Boards"
        color="#f194ff"
        onPress={() => Alert.alert('Navigating to boards')}
      />
      <Button
        title="My Posts"
        color="#f194ff"
        onPress={() => Alert.alert('Navigating to your posts')}
      />
      <Button
        title="My Comments"
        color="#f194ff"
        onPress={() => Alert.alert('Navigating to your comments')}
      />
      <Button
        title="Saved"
        color="#f194ff"
        onPress={() => Alert.alert('Navigating to saved posts')}
      />
      <Button
        title="Recent"
        color="#f194ff"
        onPress={() => Alert.alert('Navigating to recent viewed screen')}
      />
      <Button
        title="Setting"
        color="#f194ff"
        onPress={() => Alert.alert('Navigating to setting')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: `#6495ed`,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ProfileScreen;
