/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import Logo from './App/assets/logo.svg';
import WelcomeScreen from './App/screens/WelcomeScreen';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
