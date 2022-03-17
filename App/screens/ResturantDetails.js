import React from 'react';
import {View, StyleSheet} from 'react-native';
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
