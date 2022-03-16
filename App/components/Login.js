import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import style from '../config/style';
import AppButton from './AppButton';
import AppText from './AppText';
import LoginField from './LoginField';

function Login(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AppText style={styles.header}>Login</AppText>
          <AppText style={styles.text}>
            Please enter your Email Address and Password
          </AppText>
        </View>
        <View style={styles.buttonsContainer}>
          <LoginField placeholder={'Email Address'} />
          <LoginField placeholder={'Password'} />
        </View>
        <AppButton
          backgroundColor={style.color.primary}
          label={'Login'}
          textColor={style.color.white}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    color: style.text.color.textPrimary,
    fontSize: style.text.fontSize.textPrimary,
    fontWeight: style.text.fontWeight.textPrimary,
    lineHeight: style.text.lineHeight.textPrimary,
    letterSpacing: style.text.letterSpacing.textPrimary,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: -0.2,
    lineHeight: 24,
    color: '#363D4E',
    marginBottom: 20,
  },
  button: {
    marginTop: '15%',
  },
});

export default Login;
