import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

function ResturantDetails({rate, rateNum, type, priceRange, about, address}) {
  return (
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppIcon
            name={'star'}
            size={14}
            color="gold"
            // style={{marginRight: 3}}
          />
          <AppText style={styles.rate}>{rate}</AppText>
          <AppText style={styles.rateNum}>({rateNum})</AppText>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AppText style={styles.type}>{type}</AppText>
          <AppText style={styles.priceRange}>{'$'.repeat(priceRange)}</AppText>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <AppText style={styles.text}>{about}</AppText>
      </View>
      <View style={styles.addressContainer}>
        <AppText style={styles.subHeader}>Detail Address</AppText>
        <AppText style={styles.text}>{address}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  rate: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#363D4E',
    marginHorizontal: 3,
  },
  rateNum: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#363D4E',
  },
  type: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#363D4E',
    marginHorizontal: 12,
  },
  priceRange: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#363D4E',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#5C616F',
  },
  subHeader: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#040C22',
    marginBottom: 12,
  },
  addressContainer: {marginBottom: 20},
});

export default ResturantDetails;
