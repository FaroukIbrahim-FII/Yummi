import React from 'react';
import {View, StyleSheet} from 'react-native';
import DayDetails from './DayDetails';

function OperationalList({hours}) {
  return (
    <View style={styles.container}>
      {hours.map(hour => (
        <DayDetails key={hour.id} hour={hour} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default OperationalList;
