import React, {useRef} from 'react';
import {View, StyleSheet, FlatList, Animated, Dimensions} from 'react-native';
import PopularItem from './PopularItem';
import AppText from './AppText';
import MenuItem from './MenuItem';
import {ScrollView} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import DetailedDish from './DetailedDish/DetailedDish';

const {height} = Dimensions.get('window');

function PopularMenuList({data, onPress}) {
  return (
    <View style={styles.container}>
      <AppText style={styles.header}>Popular Menu</AppText>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map(item => (
          <PopularItem
            key={item.id}
            item={item}
            onPress={() => onPress(item)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: {flex: 1},
  list: {
    marginHorizontal: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.16,
    color: '#040C22',
    marginHorizontal: 20,
    marginVertical: 24,
  },
});

export default PopularMenuList;
