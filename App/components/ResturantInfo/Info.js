import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import OperationalHours from './OperationalHours';
import ResturantDetails from './ResturantDetails';

const hours = [
  {
    id: 1,
    day: 'Monday',
    startHour: '10:00',
    finishHour: '19:00',
    dayOff: false,
  },
  {
    id: 2,
    day: 'Tuesday',
    startHour: '10:00',
    finishHour: '19:00',
    dayOff: false,
  },
  {
    id: 3,
    day: 'Wednesday',
    startHour: '10:00',
    finishHour: '19:00',
    dayOff: false,
  },
  {
    id: 4,
    day: 'Thursday',
    startHour: '10:00',
    finishHour: '19:00',
    dayOff: false,
  },
  {
    id: 5,
    day: 'Friday',
    startHour: '10:00',
    finishHour: '19:00',
    dayOff: false,
  },
  {
    id: 6,
    day: 'Saturday',
    startHour: '10:00',
    finishHour: '19:00',
    dayOff: false,
  },
  {id: 7, day: 'Sunday', dayOff: true},
];

function Info({details}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppText style={styles.header}>{details.name}</AppText>
          <AppIcon name={'home-floor-1'} size={22} color={'#0BB8E4'} />
        </View>
        <ResturantDetails
          rate={details.rate}
          rateNum={details.rateNum}
          type={details.type}
          priceRange={details.priceRange}
          about={details.about}
          address={details.address}
        />
        <OperationalHours hours={details.hours} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.2,
    color: '#040C22',
    marginRight: 6,
  },
});

export default Info;
