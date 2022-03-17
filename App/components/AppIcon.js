import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function AppIcon({name, size, color, style}) {
  return (
    <View style={[styles.container, style]}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppIcon;
