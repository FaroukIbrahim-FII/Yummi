import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppText from './AppText';
import MenuItem from './MenuItem';
import MenuSelectList from './MenuSelectList';

function MenuList({list, selectionItems}) {
  return (
    <View style={styles.container}>
      <AppText style={styles.header}>Right From Oven’s Menu</AppText>
      <MenuSelectList selectionItems={selectionItems} />
      <View style={{flexWrap: 'wrap'}}>
        {list.map(item => (
          <MenuItem key={item.id} item={item} />
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
