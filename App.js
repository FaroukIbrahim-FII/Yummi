/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import Logo from './App/assets/logo.svg';
import 'react-native-gesture-handler';
import WelcomeScreen from './App/screens/WelcomeScreen';

import {LogBox} from 'react-native';
import ResturantDetails from './App/screens/ResturantDetails';
import HomeScreen from './App/screens/HomeScreen';
import FoodDetails from './App/screens/FoodDetails';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './App/navigations/HomeNavigator';
import AuthNavigation from './App/navigations/AuthNavigation';
import defaultTheme from './App/navigations/navigationTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppIcon from './App/components/AppIcon';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';
import RNBootSplash from 'react-native-bootsplash';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

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
