// SignupScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
        <TextInput
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

export default SignupScreen;
