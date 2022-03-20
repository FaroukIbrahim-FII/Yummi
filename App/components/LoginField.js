import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Dimensions, Text} from 'react-native';

const {width} = Dimensions.get('window');

function LoginField({placeholder}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleTextChange = text => setValue(text);

  return (
    <View style={styles.container}>
      <Text style={isFocused || value ? styles.focused : styles.unfocusedStyle}>
        {placeholder}
      </Text>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChangeText={handleTextChange}
      />
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
    color: '#363D4E',
  },
  unfocusedStyle: {
    position: 'absolute',
    padding: 20,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#A7AAB2',
  },
  focused: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#5C616F',
  },
});

export default LoginField;
