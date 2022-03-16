import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Login from './Login';

const WindowWidth = Dimensions.get('window').width;
const widowHeight = Dimensions.get('window').height;

function AppModal({ref}) {
  console.log(ref);
  return (
    <Modalize
      // ref={ref}
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
  );
}

const styles = StyleSheet.create({
  container: {},
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
});

export default AppModal;
