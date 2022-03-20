import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MenuSelectItem from './MenuSelectItem';

function MenuSelectList({selectionItems}) {
  const [selected, setSelected] = useState(1);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {selectionItems.map(item => (
          <MenuSelectItem
            key={item.id}
            item={item}
            onPress={() => setSelected(item.id)}
            selected={selected}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 17,
    marginVertical: 10,
  },
});

export default MenuSelectList;
