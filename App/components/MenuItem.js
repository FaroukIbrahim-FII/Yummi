import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppText from './AppText';
import AppIcon from './AppIcon';

const {width} = Dimensions.get('window');

function MenuItem({item}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: item.image}}
          style={{width: 120, height: '100%'}}
        />
      </View>
      <View style={styles.details}>
        <View>
          <View style={styles.upperSection}>
            <AppText style={styles.price}>${item.price}</AppText>
            <View style={{flexDirection: 'row'}}>
              <AppIcon name={'star'} size={12} color="gold" />
              <AppText style={styles.iconText}>{item.rate}</AppText>
            </View>
          </View>
          <AppText style={styles.header}>{item.title}</AppText>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppIcon name={'clock'} size={12} color="#5C616F" />
            <AppText style={styles.iconText}>{item.time}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 6,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  details: {
    flex: 1.67,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  upperSection: {flexDirection: 'row', justifyContent: 'space-between'},
  price: {
    color: '#F26333',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.12,
    marginBottom: 5,
  },
  iconText: {
    color: '#5C616F',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.12,
  },
  header: {
    color: '#363D4E',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.2,
  },
});

export default MenuItem;
