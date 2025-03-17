import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextComponent from './src/components/TextComponent';


const Auth = () => {
  return (
    <View style={styles.container}>
      <TextComponent>Welcome to panPalz, rando!</TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Auth;