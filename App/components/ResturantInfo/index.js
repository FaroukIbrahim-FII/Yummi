import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import AppText from '../AppText';
import Info from './Info';

const {width} = Dimensions.get('window');

function index(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://res.cloudinary.com/faroukibrahim/image/upload/v1647440204/Map_lcxryp.png',
        }}
        style={{width: width, height: 744, flex: 1}}>
        <View style={{flex: 0.8, backgroundColor: 'white'}}></View>
        <View style={{flex: 2}}></View>
        <View style={styles.infoContainer}>
          <Info />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  infoContainer: {flex: 5, backgroundColor: 'white', borderRadius: 16},
});

export default index;
