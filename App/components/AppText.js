import React from 'react';
import {StyleSheet, Text} from 'react-native';

function AppText({children, style, ...otherProps}) {
  return (
    <Text style={[styles.container, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppText;
