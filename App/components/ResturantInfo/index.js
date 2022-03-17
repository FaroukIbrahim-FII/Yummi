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
import useApi from '../../hooks/useApi';

const {width} = Dimensions.get('window');

function index(props) {
  const api = useApi();
  const resturantDetails = api.resturantDetails;
  console.log('resturant details: ', resturantDetails.map);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: resturantDetails['map'],
        }}
        style={{width: width, height: 744, flex: 1}}>
        <View style={{flex: 0.8, backgroundColor: 'white'}}></View>
        <View style={{flex: 2}}></View>
        <View style={styles.infoContainer}>
          <Info details={resturantDetails} />
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
