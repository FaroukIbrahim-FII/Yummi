import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AppText from './AppText';

function DetailedDish({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.image}}
          style={{width: '100%', height: 287}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 33,
    paddingHorizontal: 20,
  },
  imageContainer: {
    backgroundColor: 'yellow',
  },
});

export default DetailedDish;
