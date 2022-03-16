import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

function DishDetails({text, price, rate, time}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
        }}>
        <AppText style={styles.header}>{text}</AppText>
        <AppText style={styles.price}>${price}</AppText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppIcon name={'star'} size={12} color="gold" />
          <AppText style={styles.iconText}>{rate}</AppText>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppIcon name={'clock'} size={12} color="#5C616F" />
          <AppText style={styles.iconText}>{time}</AppText>
        </View>
      </View>
      <View>
        <AppText style={styles.text}>
          Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit.
          Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the
          food.
        </AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  iconText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#5C616F',
    marginRight: 20,
    marginLeft: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#5C616F',
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.16,
    color: '#040C22',
    marginVertical: 12,
    flex: 1.8,
  },
  price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: -0.24,
    color: '#F26333',
  },
});

export default DishDetails;
