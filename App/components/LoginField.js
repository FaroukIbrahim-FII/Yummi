import React from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import AppText from './AppText';

const {width} = Dimensions.get('window');

function LoginField({placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 15,
    width: width - 40,
    backgroundColor: '#E8EBEE',
    borderRadius: 8,
  },
  input: {
    fontSize: 17,
    padding: 5,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#A7AAB2',
  },
});

export default LoginField;
