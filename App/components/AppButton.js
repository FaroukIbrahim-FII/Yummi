import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../config/style';
import AppIcon from './AppIcon';
import AppText from './AppText';

const {width} = Dimensions.get('window');

function AppButton({
  label,
  backgroundColor,
  textColor,
  onPress,
  style,
  iconName,
  iconSize,
  iconColor,
  fontSize = 17,
  ...otherProps
}) {
  //   console.log(iconName);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, {backgroundColor: backgroundColor}]}
      {...otherProps}>
      {iconName && <Icon name="email" size={iconSize} color={iconColor} />}
      {label && (
        <AppText style={[styles.text, {color: textColor, fontSize: fontSize}]}>
          {label}
        </AppText>
      )}
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
