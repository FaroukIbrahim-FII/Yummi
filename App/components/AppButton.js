import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import style from '../config/style';
import AppText from './AppText';

function AppButton({label, backgroundColor, textColor, ...otherProps}) {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: backgroundColor}]}
      {...otherProps}>
      <AppText style={[styles.text, {color: textColor}]}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: style.color.primary,
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    letterSpacing: style.text.letterSpacing.textButtonPrimary,
    fontSize: style.text.fontSize.textButtonPrimary,
    fontWeight: style.text.fontWeight.textButtonPrimary,
    lineHeight: style.text.lineHeight.textButtonPrimary,
    textAlign: 'center',
  },
});

export default AppButton;
