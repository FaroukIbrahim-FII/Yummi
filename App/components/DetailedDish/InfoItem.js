import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

function InfoItem({icon, color, data}) {
  return (
    <View style={styles.infoContainer}>
      <AppIcon name={icon} color={color} size={14} style={{marginRight: 4}} />
      <AppText style={styles.infoText}>{data}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
});

export default InfoItem;
