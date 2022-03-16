import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ResturantInfo from '../components/ResturantInfo';

function ResturantDetails(props) {
  return (
    <View style={styles.container}>
      <ResturantInfo />
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

export default ResturantDetails;
