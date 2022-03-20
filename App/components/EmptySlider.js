import React from 'react';
import {View, StyleSheet} from 'react-native';
import style from '../config/style';

function EmptySlider(props) {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <View
          style={{
            backgroundColor: '#CDD4DB',
            width: 240,
            height: 240,
            marginVertical: 20,
          }}></View>
        <View
          style={{
            backgroundColor: '#CDD4DB',
            width: 240,
            height: 20,
            marginVertical: 10,
          }}></View>
        <View
          style={{
            backgroundColor: '#CDD4DB',
            width: 300,
            height: 20,
            marginVertical: 20,
          }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    fontSize: style.text.fontSize.textPrimary,
    fontWeight: style.text.fontWeight.textPrimary,
    lineHeight: style.text.lineHeight.textPrimary,
    textAlign: 'center',
    letterSpacing: style.text.letterSpacing.textPrimary,
    color: style.text.color.textPrimary,
    marginBottom: 10,
  },
  secondaryText: {
    fontSize: style.text.fontSize.textSecondary,
    fontWeight: style.text.fontWeight.textSecondary,
    lineHeight: style.text.lineHeight.textSecondary,
    textAlign: 'center',
    letterSpacing: style.text.letterSpacing.textSecondary,
    color: style.text.color.textSecondary,
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});

export default EmptySlider;
