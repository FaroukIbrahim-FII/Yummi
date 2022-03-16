import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

function AuthNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={HomeNavigator}
        options={{headerShown: false}}
        // options={{headerStyle: styles.header}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 0,
  },
});

export default AuthNavigation;
