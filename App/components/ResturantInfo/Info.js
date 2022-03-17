import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import OperationalHours from './OperationalHours';
import ResturantDetails from './ResturantDetails';

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
