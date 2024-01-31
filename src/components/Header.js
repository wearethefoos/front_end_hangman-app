import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HangMan Game</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    padding: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '200'
  },
});

export default Header;