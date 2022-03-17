import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../AppText';

import InfoItem from './InfoItem';

function DishInfo({foodInfo}) {
  return (
    <View>
      <AppText style={styles.mainInfo}>Food Informations</AppText>
      <View style={styles.infoList}>
        {foodInfo.map(item => (
          <InfoItem
            key={item.id}
            icon={item.icon}
            color={item.color}
            data={item.data}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainInfo: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.2,
    color: '#363D4E',
  },

  infoList: {flexDirection: 'row', marginTop: 12, marginBottom: 24},
});

export default DishInfo;
