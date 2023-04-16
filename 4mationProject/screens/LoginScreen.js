import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    setIsDialogVisible(true);
  };
  const hideErrorMessage = () => {
    setIsDialogVisible(false);
  };

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up and in 
      const user = userCredential.user;
      navigation.navigate('Home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showErrorMessage(errorMessage);
    });
  };
  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigation.navigate('Home')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      showErrorMessage(errorMessage);
    });
  };
  const handleAnonymousLogin = () => {
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login/Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        // secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAnonymousLogin}>
            <Text style={styles.buttonText}>Anonymous</Text>
        </TouchableOpacity>
      </View>
      <PopupDialog
        visible={isDialogVisible}
        onTouchOutside={() => hideErrorMessage()}
        dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
      >
        <View style={{padding: 15}}>
          <Text style={{fontSize: 16}} >{errorMessage}</Text>
        </View>
      </PopupDialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  rowContainer: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;

