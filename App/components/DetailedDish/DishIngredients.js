import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../AppText';

function DishIngredients({mainIng}) {
  return (
    <View>
      <AppText style={styles.mainIng}>Main Ingredients</AppText>
      <View style={{flexDirection: 'row', marginTop: 14, marginBottom: 20}}>
        {mainIng.map(item => (
          <Image
            key={item.id}
            source={{uri: item.image}}
            style={{width: 36, height: 36, marginRight: 12}}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainIng: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.2,
    color: '#363D4E',
  },
});

export default DishIngredients;
