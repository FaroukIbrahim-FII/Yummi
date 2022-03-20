import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import AppText from './AppText';

function MenuSelectItem({item, onPress, selected}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={
          selected === item.id ? styles.selectedContainer : styles.container
        }>
        <AppText
          style={selected === item.id ? styles.selectedText : styles.text}>
          {item.name}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: '#E8EBEE',
    borderRadius: 6,
    marginHorizontal: 5,
  },
  selectedContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: '#F26333',
    borderRadius: 6,
    marginHorizontal: 5,
  },
  selectedText: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#FFEBE4',
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.12,
    color: '#5C616F',
  },
});

export default MenuSelectItem;
