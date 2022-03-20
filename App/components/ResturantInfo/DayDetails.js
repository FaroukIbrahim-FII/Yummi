import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';

function DayDetails({hour}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <AppText style={styles.day}>{hour.day}</AppText>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {hour.dayOff ? (
          <AppText style={styles.offDay}>off Day</AppText>
        ) : (
          <>
            <AppIcon name={'clock'} size={12} color="#363D4E" />
            <AppText style={styles.hours}>
              {hour.startHour} - {hour.finishHour}
            </AppText>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#00000050',
    borderBottomWidth: 0.5,
  },
  hours: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#363D4E',
  },
  offDay: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#F55053',
  },
  day: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#363D4E',
  },
});

export default DayDetails;
