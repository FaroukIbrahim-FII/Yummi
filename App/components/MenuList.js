import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';
import MenuItem from './MenuItem';
import MenuSelectList from './MenuSelectList';
import useApi from '../hooks/useApi';

function MenuList({list, selectionItems, onPress}) {
  const api = useApi();
  const resturantDetails = api.resturantDetails;
  return (
    <View style={styles.container}>
      <AppText style={styles.header}>{resturantDetails.name}’s Menu</AppText>
      <MenuSelectList selectionItems={selectionItems} />
      <View style={{flexWrap: 'wrap'}}>
        {list.map(item => (
          <MenuItem key={item.id} item={item} onPress={onPress} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.16,
    color: '#040C22',
    marginLeft: 25,
    marginVertical: 10,
  },
});

export default MenuList;
