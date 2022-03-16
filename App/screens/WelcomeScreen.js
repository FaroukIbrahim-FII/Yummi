import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, Animated} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Slider from '../components/Slider';
import style from '../config/style';
import {Modalize} from 'react-native-modalize';
import Login from '../components/Login';
import {useEffect} from 'react';
import useApi from '../api/useApi';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {GET_SLIDER_DATA} from '../redux/actions/sliderActions';

const WindowWidth = Dimensions.get('window').width;
const widowHeight = Dimensions.get('window').height;

function WelcomeScreen() {
  const modalizeRef = useRef(null);
  const dispatch = useDispatch();
  const sliderData = useSelector(state => state.sliderData);

  const onOpen = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };
  const getslider = async () => {
    const {data} = await useApi.getSliderData('/slider');
    dispatch(GET_SLIDER_DATA(data));
  };
  useEffect(() => {
    getslider();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider sliderData={sliderData} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          label={'Get Started'}
          backgroundColor={style.color.primary}
          textColor={style.text.color.textButtonPrimary}
        />
        <AppButton
          onPress={onOpen}
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
      <Modalize
        ref={modalizeRef}
        rootStyle={styles.rootStyle}
        modalStyle={styles.modal}
        handleStyle={{backgroundColor: '#E5E5E5'}}
        handlePosition={20}
        modalHeight={widowHeight / 2}
        customRenderer={() => (
          <Animated.View>
            <Login />
          </Animated.View>
        )}
      />
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
