// SignupScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button ,StyleSheet} from 'react-native';
import { signUp } from '../services/AuthService'; // Import the AuthService function

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [deviceId, setDeviceId] = useState(''); // You might need to retrieve device ID

  const handleSignUp = async () => {
    try {
      const newUser = await signUp(name, deviceId); // Call the signUp function from AuthService
      console.log('New user signed up:', newUser);
      // Navigate to another screen or perform any other action upon successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup error (e.g., display error message to the user)
    }
  };

  return (
    <View style ={styles.container}>
      <TextInput
        style ={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
        <TextInput
          style ={styles.input}  
          placeholder="Device ID"
          value={deviceId}
          onChangeText={setDeviceId}
          />
      <Button
        title="Sign Up"
        onPress={handleSignUp}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 100,
  },
  input: {
    
    height: 40,
    width: 'auto',
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignupScreen;
