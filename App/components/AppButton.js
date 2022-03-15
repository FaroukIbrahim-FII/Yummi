import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import style from '../config/style';
import AppText from './AppText';

const {width} = Dimensions.get('window');

function AppButton({
  label,
  backgroundColor,
  textColor,
  onPress,
  style,
  ...otherProps
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, {backgroundColor: backgroundColor}]}
      {...otherProps}>
      <AppText style={[styles.text, {color: textColor}]}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
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
