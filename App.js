import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button ,TextInput} from 'react-native';

import SignupScreen from './src/screens/SignupScreen';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
      <SignupScreen/>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor:  '#f0f0f0', 
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 24, 
  //   color: 'blue', 
  //   marginBottom: 20, 
  // },
});
