import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,TextInput} from 'react-native';

import SignupScreen from './src/screens/SignupScreen';

export default function App() {
//  const [name, setName] = useState('');
//   const [deviceId, setDeviceId] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
 
//   const handleSignUp = async () => {
//   //  try{
//   // const signUpResult = await signUp('name', 'deviceId');
//   //   console.log(signUpResult); // Log the result to the console
//   //     // Handle successful signup (e.g., navigate to another screen)
//   //   } catch (error) {
//   //     console.error('Error signing up:', error);
//   //     setError('Failed to sign up. Please try again.'); // Set error message
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   //   };
  return (
    <View style={styles.container}>
      <Text>Welcome Human SignUp screen</Text>
      <SignupScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});