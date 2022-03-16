import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DetailedDish from '../components/DetailedDish';

function FoodDetails(props) {
  return (
    <View style={styles.container}>
      <Text>FoodDetails</Text>
      <DetailedDish />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FoodDetails;
