import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';
import AppIcon from './AppIcon';
import InfoItem from './InfoItem';

function DishInfo({foodInfo}) {
  return (
    <View>
      <AppText style={styles.mainInfo}>Food Informations</AppText>
      <View style={styles.infoList}>
        {foodInfo.map(item => (
          //   <View key={item.id} style={styles.infoContainer}>
          //     <AppIcon
          //       name={item.icon}
          //       color={item.color}
          //       size={14}
          //       style={{marginRight: 4}}
          //     />
          //     <AppText style={styles.infoText}>{item.data}</AppText>
          //   </View>
          <InfoItem icon={item.icon} color={item.color} data={item.data} />
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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#CDD4DB',
    borderWidth: 0.5,
    backgroundColor: '#F6F7F8',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
  },
  infoText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#363D4E',
  },
  infoList: {flexDirection: 'row', marginTop: 12, marginBottom: 24},
});

export default DishInfo;
