import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../AppText';
import OperationalList from './OperationalList';

function OperationalHours({hours}) {
  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.subHeader}>Operational Hours</AppText>
        <OperationalList hours={hours} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  subHeader: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.2,
    color: '#040C22',
    marginBottom: 8,
  },
});

export default OperationalHours;
