import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import OrderFood from '../assets/order-food.svg';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Slider from '../components/Slider';
import style from '../config/style';

const WindowWidth = Dimensions.get('window').width;

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          label={'Get Started'}
          backgroundColor={style.color.primary}
          textColor={style.text.color.textButtonPrimary}
        />
        <AppButton
          label={'Login'}
          backgroundColor={style.color.white}
          textColor={style.color.primary}
        />
      </View>
      <View style={styles.privacy}>
        <AppText style={[styles.secondaryText]}>
          By using our mobile app, you agree to our Terms of Use and Privacy
          Policy
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1.5,
    paddingHorizontal: '15%',
  },
  primaryText: {
    fontSize: style.text.fontSize.textPrimary,
    fontWeight: style.text.fontWeight.textPrimary,
    lineHeight: style.text.lineHeight.textPrimary,
    textAlign: 'center',
    letterSpacing: style.text.letterSpacing.textPrimary,
    color: style.text.color.textPrimary,
  },
  secondaryText: {
    fontSize: style.text.fontSize.textSecondary,
    fontWeight: style.text.fontWeight.textSecondary,
    lineHeight: style.text.lineHeight.textSecondary,
    textAlign: 'center',
    letterSpacing: style.text.letterSpacing.textSecondary,
    color: style.text.color.textSecondary,
  },
  buttonContainer: {
    width: WindowWidth,
    padding: 20,
    flex: 0.6,
    justifyContent: 'flex-end',
  },
  privacy: {
    flex: 0.3,
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
