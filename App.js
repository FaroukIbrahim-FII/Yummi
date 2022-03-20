/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, AppState} from 'react-native';
import 'react-native-gesture-handler';

import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './App/navigations/AuthNavigation';
import defaultTheme from './App/navigations/navigationTheme';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import RNBootSplash from 'react-native-bootsplash';
import * as LocalAuthentication from 'expo-local-authentication';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  const [authenticated, setAuthenticated] = useState(false);
  const appState = useRef(AppState.currentState);

  const handleBioAuth = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync();
      setAuthenticated(result.success);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const _handleAppStateChange = nextState => {
    if (appState.current.match(/background/) && nextState === 'active') {
      setAuthenticated(false);
      handleBioAuth();
    }
    appState.current = nextState;

    // console.log('app state is: ', appState.current);
  };

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    handleBioAuth();
    return () => {
      AppState.addEventListener('change', _handleAppStateChange).remove();
    };
  }, []);

  if (!authenticated) return null;

  return (
    <Provider store={store}>
      <NavigationContainer theme={defaultTheme}>
        <AuthNavigation />
      </NavigationContainer>
    </Provider>
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
