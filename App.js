import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,TextInput} from 'react-native';

import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Human SignUp screen</Text>
      <SignupScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#f0f0f0', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24, 
    color: 'blue', 
    marginBottom: 20, 
  },
});
