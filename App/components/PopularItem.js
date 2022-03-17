import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import AppIcon from './AppIcon';

function PopularItem({item, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.item}>
        <Image
          source={{uri: item.image}}
          style={{width: '100%', height: 129}}
        />
        <View style={{padding: 12}}>
          <AppText style={styles.header}>{item.text}</AppText>
          <View style={styles.iconContainer}>
            <View style={styles.starContainer}>
              <AppIcon name={'star'} size={12} color="gold" />
              <AppText style={styles.iconText}>{item.rate}</AppText>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AppIcon name={'clock'} size={12} color="#5C616F" />
              <AppText style={styles.iconText}>{item.time}</AppText>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <AppText style={styles.price}>${item.price}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    borderRadius: 6,
    marginHorizontal: 15,
    marginBottom: 15,
    shadowOffset: {width: 4, height: 8},
    shadowColor: '#00000060',
    shadowRadius: 8,
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.2,
    color: '#363D4E',
  },
  iconContainer: {flexDirection: 'row', alignItems: 'center'},

  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#5C616F',
    marginRight: 20,
    marginLeft: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.12,
    color: '#F26333',
  },
});

export default PopularItem;
