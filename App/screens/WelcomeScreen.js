import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  FlatList,
  Animated,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Slider from '../components/Slider';
import style from '../config/style';
import {Modalize} from 'react-native-modalize';
import LoginField from '../components/LoginField';
import Login from '../components/Login';
import AppModal from '../components/AppModal';

const WindowWidth = Dimensions.get('window').width;
const widowHeight = Dimensions.get('window').height;

const data = [
  {id: 1, item: 'some text1'},
  {id: 2, item: 'some text2'},
  {id: 3, item: 'some text3'},
  {id: 4, item: 'some text4'},
];

function WelcomeScreen(props) {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };
  const renderItem = item => (
    <View style={styles.container}>
      <Text>{item.item.item}</Text>
    </View>
  );
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
  rootStyle: {
    backgroundColor: '#00000020',
  },
  modal: {
    padding: 20,
    alignSelf: 'center',
    width: WindowWidth,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
